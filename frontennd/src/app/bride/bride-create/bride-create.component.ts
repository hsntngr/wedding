import { Component, OnInit } from '@angular/core';
import { BrideService } from "../../../services/brides/bride.service";
import { Bride } from "../../../services/brides/bride";
import { Observable } from "rxjs";
import { Router } from '@angular/router';


@Component({
  selector: 'app-bride-create',
  templateUrl: './bride-create.component.html',
  styleUrls: ['./bride-create.component.css']
})
export class BrideCreateComponent implements OnInit {

  bride: Bride = new Bride();
  submitted = false;

  constructor(private brideService: BrideService,
    private router: Router) { }

  ngOnInit(): void {
  }


  
  openFileBrowser(event: any) {
    event.preventDefault();
    let element: HTMLElement = document.querySelector("#fileUploadInputExample") as HTMLElement;
    element.click()
  }

  handleFileInput(event: any) {
    if (event.target.files.length) {
      let element: HTMLElement = document.querySelector("#fileUploadInputExample + .input-group .file-upload-info") as HTMLElement;
      let fileName = event.target.files[0].name;
      element.setAttribute( 'value', fileName)
    }
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
