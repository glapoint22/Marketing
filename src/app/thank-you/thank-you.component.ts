import { Component, OnInit } from '@angular/core';
// import { DataService } from "../data.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  private siteName: string = 'Gumpy\'s';
  private customer: string;
  private email: string;
  private leadMagnet: string;
  private customerId: string;
  private type: string;
  private hoplink: string;
  private productId: string;
  private productName: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

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
