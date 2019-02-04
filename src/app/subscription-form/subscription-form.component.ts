import { Component, OnInit, Input } from '@angular/core';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { ShowModalService } from "../show-modal.service";

@Component({
  selector: 'subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss', '../modal/modal.component.scss']
})
export class SubscriptionFormComponent extends ModalFormComponent implements OnInit {
  @Input() caption: string = 'Enter your name and email below to manage your email subscriptions';
  @Input() buttonText: string = 'Submit';
  public name: string;
  public email: string;

  private product;

  constructor(dataService: DataService, router: Router, showModalService: ShowModalService) { super(dataService, router, showModalService); }

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

  open(product) {
    this.product = product;
    super.open();
  }

  close(closedByNavigation: boolean) {
    if (this.show) {
      super.close();
      if (this.product && this.product.hopLink) {
        this.showModalService.showLoading(true);
        window.location.href = this.product.hopLink;
      }else {
        if(!closedByNavigation)this.router.navigate(['']);
        
      }
    }
  }

  nextAction(response) {
    //If a product was clicked
    if (this.product && this.product.hopLink) {
      let hoplink = this.product.hopLink + '?tid=' + response.customer.id + this.product.id;

      //If we have an existing customer, go straight to the product page
      if (response.customer.isExistingCustomer) {
        window.location.href = hoplink;
      } else {
        //We have a new customer so naviagate to the thank you page with product info
        this.dataService.data = {
          customer: response.customer.name,
          hoplink: hoplink,
          productName: this.product.name
        }
        this.router.navigate(['/thank-you']);
      }
      //Product was not clicked
    } else {
      //If we have an existing customer, go straight to the preferences page
      if (response.customer.isExistingCustomer) {
        window.location.reload();
      } else {
        //We have a new customer so naviagate to the thank you page
        this.dataService.data = {
          customer: response.customer.name
        }
        this.router.navigate(['/thank-you']);
      }
    }
  }
}