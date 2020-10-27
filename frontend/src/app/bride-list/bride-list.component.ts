import { Component, OnInit, ViewChild } from '@angular/core';
import { BrideService } from "../service/bride.service";
import { Bride } from "../service/bride";
import { Router} from '@angular/router';
import { Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-bride-list',
  templateUrl: './bride-list.component.html',
  styleUrls: ['./bride-list.component.css']
})
export class BrideListComponent implements OnInit {

  brides: Observable<Bride[]>;

  bride: Bride[];
  datasource;
  displayedColumns: string[] = [
    "name",
    "surname",
    "weddingDate",
    "type",
    "action"
    ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private brideService: BrideService,
    private router: Router
  ) { }

  

  ngOnInit(): void {
    this.brideService.getBrideList().subscribe(result => {
      this.bride = result;
      this.datasource = new MatTableDataSource<Bride>(this.bride);
      this.datasource.paginator = this.paginator;
      
    });    
  }

  applyFilter(filterValue:string){
    this.datasource.filter = filterValue.trim().toLowerCase();
  }


  deleteBride(id: number) {
    this.brideService.deleteBride(id).subscribe(result => {
      let category = this.bride.filter(x => x._id == id)[0];
    
      let index = this.bride.indexOf(category);
      this.bride.splice(index, 1);
      this.datasource = new MatTableDataSource<Bride>(this.bride);
          
    });
  }

  createSms(id: number){
    this.brideService.createSms(id).subscribe(result => {
          this.datasource = new MatTableDataSource<Bride>(this.bride);
    });
  }

  createSmsHoliday(id: number){
    this.brideService.createSms(id).subscribe(result => {
      this.datasource = new MatTableDataSource<Bride>(this.bride);
});
  }

  brideDetails(id: number){
    this.router.navigate(['/details', id]);
  }

  brideInvoice(id: number){
    this.router.navigate(['/invoice', id]);
  }

  updateBride(id: number){
    this.router.navigate(['/update', id]);
  }

}
