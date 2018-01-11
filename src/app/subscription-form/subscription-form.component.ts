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
    this.dataService.data['customer'] = response.customer.name;

    //Check to see if a cookie is set for this customer
    if (!this.cookieService.check('Customer')) {
      this.cookieService.set('Customer', response.customer.id, 9999);
    }
  }

  close() {
    if (this.show) {
      super.close();
      if (this.dataService.data.hopLink) {
        window.location.href = this.dataService.data.hopLink;
      }
    }
  }

  nextAction(response) {
    //If a product was clicked
    if (this.dataService.data.hopLink) {
      //If we have an existing customer, go straight to the product page
      if (response.customer.isExistingCustomer) {
        window.location.href = this.dataService.data.hopLink;
      } else {
        //We have a new customer so show the thank you page
        this.dataService.data['content'] = '<a style="color: #ab0395" href="' + this.dataService.data.hopLink + '?tid=' + response.customer.id + this.dataService.data.id + '">Product</a>';
        this.router.navigate(['/thank-you']);
      }
      //Product was not clicked
    } else {
      //If we have an existing customer, go straight to the preferences page
      if (response.customer.isExistingCustomer) {
        this.router.navigate(['/preferences'], { queryParams: { 'cid': response.customer.id } });
      } else {
        //We have a new customer so show the thank you page
        this.dataService.data['content'] = 'No Product and not existing customer!!';
        this.router.navigate(['/thank-you']);
      }
    }
  }
}