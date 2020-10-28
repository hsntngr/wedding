import {Component, OnInit, ViewChild} from '@angular/core';
import {BrideService} from '../service/bride.service';
import {Bride} from '../service/bride';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {DatePipe} from '@angular/common';

interface BrideTableFilters {
  brideName: string;
  weddingDate: string;
}

@Component({
  selector: 'app-bride-list',
  templateUrl: './bride-list.component.html',
  styleUrls: ['./bride-list.component.css'],
  providers: [DatePipe]
})
export class BrideListComponent implements OnInit {

  brides: Observable<Bride[]>;

  bride: Bride[];
  datasource;
  displayedColumns: string[] = [
    'name',
    'surname',
    'weddingDate',
    'type',
    'action'
  ];
  filters: BrideTableFilters = {
    brideName: null,
    weddingDate: null
  };

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private brideService: BrideService,
    private router: Router,
    private datePipe: DatePipe
  ) {
  }


  ngOnInit(): void {
    this.brideService.getBrideList().subscribe(result => {
      this.bride = result;
      this.datasource = new MatTableDataSource<Bride>(this.bride);
      this.datasource.paginator = this.paginator;
    });

    this.datasource = new MatTableDataSource<Bride>(this.bride);
    this.datasource.paginator = this.paginator;
    this.datasource.filterPredicate = (data: Bride, filters: BrideTableFilters) => {
      const {brideName, weddingDate} = filters;
      const dateName = data.name.toLocaleLowerCase('tr');
      const dataSurname = data.surname.toLocaleLowerCase('tr');
      const dataFullName = dateName + ' ' + dataSurname;
      const brideNamePass = brideName ? dataFullName.includes(brideName) : true;
      const weddingDatePass = weddingDate ? data.weddingDate === weddingDate : true;

      return brideNamePass && weddingDatePass;
    };
  }


  deleteBride(id: number) {
    this.brideService.deleteBride(id).subscribe(result => {
      let category = this.bride.filter(x => x._id == id)[0];

      let index = this.bride.indexOf(category);
      this.bride.splice(index, 1);
      this.datasource = new MatTableDataSource<Bride>(this.bride);
    });
  }

  createSms(id: number) {
    this.brideService.createSms(id).subscribe(result => {
      this.datasource = new MatTableDataSource<Bride>(this.bride);
    });
  }

  createSmsHoliday(id: number) {
    this.brideService.createSms(id).subscribe(result => {
      this.datasource = new MatTableDataSource<Bride>(this.bride);
    });
  }

  brideDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  brideInvoice(id: number) {
    this.router.navigate(['/invoice', id]);
  }

  updateBride(id: number) {
    this.router.navigate(['/update', id]);
  }

  onBrideNameChange(): void {
    this.datasource.filter = this.getNormalizedFilters();
    console.log(this.datasource.filter);
  }

  onDateFilterChange(): void {
    this.datasource.filter = this.getNormalizedFilters();
    console.log(this.datasource.filter);
  }

  getNormalizedFilters(): BrideTableFilters {
    const weddingDate = this.filters.weddingDate && this.datePipe.transform(this.filters.weddingDate, 'yyyy-MM-dd');
    const brideName = this.filters.brideName?.toLocaleLowerCase('tr').trim();

    return {weddingDate, brideName};
  }
}
