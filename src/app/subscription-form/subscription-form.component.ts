import { Component, OnInit, Input } from '@angular/core';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss', '../modal/modal.component.scss']
})
export class SubscriptionFormComponent extends ModalFormComponent implements OnInit {
  @Input() caption: string = 'Could I please get your name and email address so I can send you exciting offers?';
  @Input() buttonText: string = 'Yes! Sign me up!';
  public name: string;
  public email: string;

  constructor(private cookieService: CookieService, dataService: DataService, router: Router) { super(dataService, router); }

  ngOnInit() {
    this.url = 'api/Subscriptions';
  }

  setData() {
    this.data = {
      name: this.name,
      email: this.email
    }
    this.postData();
  }

  setResponse(response) {
    //Check to see if a cookie is set for this customer
    if (!this.cookieService.check('Customer')) {
      this.cookieService.set('Customer', response.customer.id, 9999);
    }
  }

  close() {
    if (this.show) {
      super.close();
      if (this.dataService.data.product && this.dataService.data.product.hopLink) {
        window.location.href = this.dataService.data.product.hopLink;
      }
    }
  }

  nextAction(response) {
    //If a product was clicked
    if (this.dataService.data.product && this.dataService.data.product.hopLink) {
      //If we have an existing customer, go straight to the product page
      if (response.customer.isExistingCustomer) {
        window.location.href = this.dataService.data.product.hopLink;
      } else {
        //We have a new customer so naviagate to the thank you page with product info
        this.router.navigate(['/thank-you'], {
          queryParams: {
            'customer': response.customer.name,
            'customerId': response.customer.id,
            'hoplink': this.dataService.data.product.hopLink,
            'productId': this.dataService.data.product.id,
            'productName': this.dataService.data.product.name
          }
        });
      }
      //Product was not clicked
    } else {
      //If we have an existing customer, go straight to the preferences page
      if (response.customer.isExistingCustomer) {
        this.router.navigate(['/preferences'], { queryParams: { 'cid': response.customer.id } });
      } else {
        //We have a new customer so naviagate to the thank you page
        this.router.navigate(['/thank-you'], {
          queryParams: {
            'customer': response.customer.name,
            'customerId': response.customer.id,
          }
        });
      }
    }
  }
}