import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.customer = queryParams.get('customer');
      this.email = queryParams.get('email');
      this.leadMagnet = queryParams.get('leadMagnet');
      this.customerId = queryParams.get('customerId');
      this.type = queryParams.get('type');
      this.hoplink = queryParams.get('hoplink');
      this.productId = queryParams.get('productId');
      this.productName = queryParams.get('productName');
    });
  }
}