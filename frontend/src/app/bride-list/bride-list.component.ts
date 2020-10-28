import {Component, OnInit, ViewChild} from '@angular/core';
import {BrideService} from '../service/bride.service';
import {Bride} from '../service/bride';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {DatePipe} from '@angular/common';
import {SatDatepickerInputEvent} from 'saturn-datepicker';

interface BrideTableFilters {
  brideName: string;
  weddingDate: { begin: Date, end: Date };
}

@Component({
  selector: 'app-bride-list',
  templateUrl: './bride-list.component.html',
  styleUrls: ['./bride-list.component.css'],
})
export class BrideListComponent implements OnInit {

  brides: Observable<Bride[]>;

  bride: Bride[];
  datasource: MatTableDataSource<Bride>;
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
  ) {
  }


  ngOnInit(): void {
    this.datasource = new MatTableDataSource<Bride>([]);
    this.brideService.getBrideList().subscribe(result => {
      this.datasource.paginator = this.paginator;
      this.datasource.data = this.bride = result;
      this.datasource.filterPredicate = (data: Bride, filters: any) => {
        const {brideName, weddingDate} = filters;
        const dataDateUnix = Date.parse(data.weddingDate);
        const dateName = data.name.toLocaleLowerCase('tr');
        const dataSurname = data.surname.toLocaleLowerCase('tr');
        const dataFullName = dateName + ' ' + dataSurname;
        const brideNamePass = brideName ? dataFullName.includes(brideName) : true;
        const weddingDatePass = weddingDate
          ? (dataDateUnix >= weddingDate.begin.getTime() && dataDateUnix <= weddingDate.end.getTime())
          : true;

        return brideNamePass && weddingDatePass;
      };
    });
  }


  deleteBride(id: number) {
    this.brideService.deleteBride(id).subscribe(result => {
      let category = this.bride.filter(x => x._id == id)[0];

      let index = this.bride.indexOf(category);
      this.bride.splice(index, 1);
      this.datasource.data = this.bride;
    });
  }

  createSms(id: number) {
    this.brideService.createSms(id).subscribe(result => {
      this.datasource.data = this.bride;
    });
  }

  createSmsHoliday(id: number) {
    this.brideService.createSms(id).subscribe(result => {
      this.datasource.data = this.bride;
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
  }

  onDateFilterChange($event: SatDatepickerInputEvent<unknown>): void {
    this.filters.weddingDate = $event.value as any;
    this.datasource.filter = this.getNormalizedFilters();
  }

  getNormalizedFilters(): any {
    this.filters.weddingDate.end.setHours(23);
    this.filters.weddingDate.end.setMinutes(59);
    this.filters.weddingDate.end.setSeconds(59);
    this.filters.weddingDate.end.setMilliseconds(999);
    const weddingDate = this.filters.weddingDate;
    const brideName = this.filters.brideName?.toLocaleLowerCase('tr').trim();

    return {weddingDate, brideName};
  }
}
