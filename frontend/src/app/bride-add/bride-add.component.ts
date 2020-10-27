import { Component, OnInit } from '@angular/core';
import { BrideService } from "../service/bride.service";
import { Bride } from "../service/bride";
import { Router } from '@angular/router';

@Component({
  selector: 'app-bride-add',
  templateUrl: './bride-add.component.html',
  styleUrls: ['./bride-add.component.css']
})
export class BrideAddComponent implements OnInit {

  bride: Bride = new Bride();
  submitted = false;

  constructor(private brideService: BrideService,
  private router: Router) { }

  ngOnInit(): void {
  }

  newBride(): void {
    this.submitted = false;
    this.bride = new Bride();
  }

  save() {
    this.brideService
    .createBride(this.bride).subscribe(data => {
      console.log(data)
      this.bride = new Bride();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save(); 
   
  }


  gotoList() {
    this.router.navigate(['/bride']);
  }

}
