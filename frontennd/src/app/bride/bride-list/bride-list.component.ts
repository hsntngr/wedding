import { Component, OnInit } from '@angular/core';
import { BrideService } from "../../../services/brides/bride.service";
import { Bride } from "../../../services/brides/bride";
import { Observable } from "rxjs";
import { Router } from '@angular/router';


@Component({
  selector: 'app-bride-list',
  templateUrl: './bride-list.component.html',
  styleUrls: ['./bride-list.component.css']
})



export class BrideListComponent implements OnInit {

  brides: Observable<Bride[]>;

  
  constructor(
    private brideService: BrideService,
    private router: Router
  ) { }

  

  ngOnInit(): void {

    this.reloadData();
    
  }


  reloadData() {
    this.brides = this.brideService.getBrideList();

  }



  deleteBride(id: number) {
    this.brideService.deleteBride(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
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
