import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  public customer;
  public leadMagnet;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if(this.dataService.data){
      this.customer = this.dataService.data.customer;
      this.leadMagnet = this.dataService.data.leadMagnet;
    }
  }

}
