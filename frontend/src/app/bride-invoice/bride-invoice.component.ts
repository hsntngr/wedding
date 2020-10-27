import { Component, OnInit } from '@angular/core';
import { BrideService } from "../service/bride.service";
import { Bride } from "../service/bride";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bride-invoice',
  templateUrl: './bride-invoice.component.html',
  styleUrls: ['./bride-invoice.component.css']
})
export class BrideInvoiceComponent implements OnInit {

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
