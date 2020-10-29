import {Component, OnInit, ViewChild} from '@angular/core';
import {BrideService} from '../service/bride.service';
import {Bride} from '../service/bride';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


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
    weddingDate: {begin: null, end: null}
  };
  filterDates: {
    begin: string,
    end: string
  } = {begin: null, end: null};
  WEDDING_DATE_NOT_REGISTERED = 0;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private brideService: BrideService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.datasource = new MatTableDataSource<Bride>([]);
    this.datasource.filterPredicate = (data: Bride, filters: any) => {
      const {brideName, weddingDate} = filters;

      const dataDateUnix = data.weddingDate ? Date.parse(data.weddingDate) : this.WEDDING_DATE_NOT_REGISTERED;
      const dateName = data.name?.toLocaleLowerCase('tr');
      const dataSurname = data.surname?.toLocaleLowerCase('tr');
      const dataFullName = dateName + ' ' + dataSurname;

      const brideNamePass = brideName ? dataFullName.includes(brideName) : true;
      const weddingDatePass = (weddingDate.begin && weddingDate.end && dataDateUnix)
        ? (dataDateUnix >= weddingDate.begin.getTime() && dataDateUnix <= weddingDate.end.getTime())
        : true;

      return brideNamePass && weddingDatePass;
    };

    this.datasource.paginator = this.paginator;

    this.brideService.getBrideList().subscribe(result => {
      this.datasource.data = this.bride = result;
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

  onDateFilterChange(startDate: HTMLInputElement, endDate: HTMLInputElement): void {
    this.setStartDateFilter(startDate.value);
    this.setEndDateFilter(endDate.value);

    const {begin, end} = this.filters.weddingDate;

    if (begin && end) {
      this.datasource.filter = this.getNormalizedFilters();
    }
  }

  getNormalizedFilters(): any {
    const weddingDate = this.filters.weddingDate;
    const brideName = this.filters.brideName?.toLocaleLowerCase('tr').trim();

    return {weddingDate, brideName};
  }

  setStartDateFilter(dateRaw): void {
    if (dateRaw) {
      this.filters.weddingDate.begin = this.parseDatePickerDate(dateRaw);
    }
  }

  setEndDateFilter(dateRaw): void {
    if (dateRaw) {
      this.filters.weddingDate.end = this.parseDatePickerDate(dateRaw);
      this.filters.weddingDate.end.setHours(23);
      this.filters.weddingDate.end.setMinutes(59);
      this.filters.weddingDate.end.setSeconds(59);
      this.filters.weddingDate.end.setMilliseconds(999);
    }
  }

  parseDatePickerDate(date: string): Date {
    const [day, month, year] = date.split('/');
    return new Date(+year, +month - 1, +day);
  }
}
