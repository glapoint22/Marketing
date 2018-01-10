import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  public customerName: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    if(this.dataService.data && this.dataService.data.customer){
      this.customerName = this.dataService.data.customer.substr(0, 1).toUpperCase() + this.dataService.data.customer.substr(1);
    }else{
      this.router.navigate(['']);
    }
  }
}
