import { Component, OnInit } from '@angular/core';
import { BrideService } from "../service/bride.service";
import { Bride } from "../service/bride";
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bride-edit',
  templateUrl: './bride-edit.component.html',
  styleUrls: ['./bride-edit.component.css']
})
export class BrideEditComponent implements OnInit {
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

  updateBride() {
    this.brideService.updateBride(this.id, this.bride)
      .subscribe(data => {
        console.log(data);
        this.bride = new Bride();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateBride();    
  }

  gotoList() {
    this.router.navigate(['/bride']);
  }

}
