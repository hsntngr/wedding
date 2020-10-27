import { Component, OnInit } from '@angular/core';
import { BrideService } from "../../services/brides/bride.service";
import { Bride } from "../../services/brides/bride";
import { Observable } from "rxjs";
import { Router } from '@angular/router';



@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {

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
 
}
