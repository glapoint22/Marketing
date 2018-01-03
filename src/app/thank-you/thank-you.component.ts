import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  public customer;
  public leadMagnet;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    if(this.dataService.data && this.dataService.data.customer){
      this.customer = this.dataService.data.customer;
      this.leadMagnet = this.dataService.data.leadMagnet;
    }else{
      this.router.navigate(['']);
    }
  }
}
