import { Component } from '@angular/core';
import { SubscriptionFormComponent } from '../subscription-form/subscription-form.component';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'leads-subscription-form',
  templateUrl: '../subscription-form/subscription-form.component.html',
  styleUrls: ['../subscription-form/subscription-form.component.scss', '../modal/modal.component.scss']
})
export class LeadsSubscriptionFormComponent extends SubscriptionFormComponent  {

  constructor(cookieService: CookieService, dataService: DataService, router: Router) { super(cookieService, dataService, router); }

  

}
