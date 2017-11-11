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
  @Input() caption: string;
  @Input() buttonText: string;
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
    super.close();
    window.location.href = this.dataService.data.hopLink;
  }

  nextAction(response) {
    window.location.href = this.dataService.data.hopLink + '?tid=' + response.customer.id + this.dataService.data.id;
  }
}
