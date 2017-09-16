import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Http, Response } from "@angular/http";
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'ultimate',
  templateUrl: './ultimate.component.html',
  styleUrls: ['./ultimate.component.scss']
})
export class UltimateComponent{
  public showForm: boolean = false;
  public isLoading: boolean = false;
  public name: string;
  public email: string;

  constructor(private http: Http, private router: Router, private dataService: DataService){}

  onSubmit(form): void{
    if(form.form.status === 'VALID'){
      this.showForm = false;
      this.isLoading = true;
      let body = {
          email: this.email,
          name: this.name,
          leadPage: 'UltimateBodyTransformation'
      }

      this.http.post('api/Customers', body)
        .map((response: Response) => response.json())
        .subscribe((response: Response) => {
            this.dataService.data =  response
          }, error => {
            console.log(error);
          },
          () => {
            this.isLoading = false;
            this.router.navigate(['/thank-you']);
          }
        );
    }
  }

  stopPropagation(event): void{
    event.stopPropagation();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key === 'Escape'){
      this.showForm = false;
    }
  }
}