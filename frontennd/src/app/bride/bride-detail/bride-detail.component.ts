import { Component, OnInit } from '@angular/core';
import { BrideService } from "../../../services/brides/bride.service";
import { Bride } from "../../../services/brides/bride";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bride-detail',
  templateUrl: './bride-detail.component.html',
  styleUrls: ['./bride-detail.component.css']
})
export class BrideDetailComponent implements OnInit {
  id: number;
  bride: Bride;

  constructor(private route: ActivatedRoute,private router: Router,
    private brideService: BrideService) { }

  ngOnInit() {
    this.bride = new Bride();

    this.id = this.route.snapshot.params['id'];
    
    this.brideService.getBride(this.id)
      .subscribe(data => {
        console.log(data)
        this.bride = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/bride']);
  }


}
