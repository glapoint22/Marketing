import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  public customer: string;
  public email: string;
  public leadMagnet: string;
  public customerId: string;
  public type: string;
  public hoplink: string;
  public productId: string;
  public productName: string;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    if (!this.dataService.data.customer) {
      this.router.navigate(['']);
    } else {
      this.customer = this.dataService.data.customer;
      this.email = this.dataService.data.email;
      this.leadMagnet = this.dataService.data.leadMagnet;
      this.hoplink = this.dataService.data.hoplink;
      this.productId = this.dataService.data.productId;
      this.productName = this.dataService.data.productName;
    }
  }
}