import { Component, OnInit, Input } from '@angular/core';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { ShowModalService } from "../show-modal.service";

@Component({
  selector: 'subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss', '../modal/modal.component.scss']
})
export class SubscriptionFormComponent extends ModalFormComponent implements OnInit {
  @Input() caption: string = 'Would you like to sign up to our mailing list to receive exciting offers?';
  @Input() buttonText: string = 'Yes! Sign me up!';
  public name: string;
  public email: string;

  private product;

  constructor(private cookieService: CookieService, dataService: DataService, router: Router, showModalService: ShowModalService) { super(dataService, router, showModalService); }

  ngOnInit() {
    this.url = 'api/Subscriptions';
    this.observable = this.showModalService.subscriptionForm;
    super.ngOnInit();
  }

  setData() {
    this.data = {
      name: this.name,
      email: this.email
    }
    this.postData();
  }

  // setResponse(response) {
  //   //Check to see if a cookie is set for this customer
  //   if (!this.cookieService.check('Customer')) {
  //     this.cookieService.set('Customer', response.customer.id, 9999);
  //   }
  // }

  open(product) {
    this.product = product;
    super.open();
  }

  close() {
    if (this.show) {
      super.close();
      if (this.product && this.product.hopLink) {
        this.showModalService.showLoading(true);
        window.location.href = this.product.hopLink;
      }
    }
  }

  nextAction(response) {
    //If a product was clicked
    if (this.product && this.product.hopLink) {
      //If we have an existing customer, go straight to the product page
      if (response.customer.isExistingCustomer) {
        window.location.href = this.product.hopLink;
      } else {
        //We have a new customer so naviagate to the thank you page with product info
        this.dataService.data = {
          customer: response.customer.name,
          hoplink: this.product.hopLink,
          productId: this.product.id,
          productName: this.product.name
        }
        this.router.navigate(['/thank-you']);
        // this.router.navigate(['/thank-you'], {
        //   queryParams: {
        //     'customer': response.customer.name,
        //     // 'customerId': response.customer.id,
        //     'hoplink': this.product.hopLink,
        //     'productId': this.product.id,
        //     'productName': this.product.name
        //   }
        // });
      }
      //Product was not clicked
    } else {
      //If we have an existing customer, go straight to the preferences page
      if (response.customer.isExistingCustomer) {
        this.router.navigate(['/preferences']);
      } else {
        //We have a new customer so naviagate to the thank you page
        this.dataService.data = {
          customer: response.customer.name
        }
        this.router.navigate(['/thank-you']);
        // this.router.navigate(['/thank-you'], {
        //   queryParams: {
        //     'customer': response.customer.name,
        //     // 'customerId': response.customer.id,
        //   }
        // });
      }
    }
  }
}