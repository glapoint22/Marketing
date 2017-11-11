import { Component, Input } from '@angular/core';
import { SubscriptionFormComponent } from '../subscription-form/subscription-form.component';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'leads-subscription-form',
  templateUrl: '../subscription-form/subscription-form.component.html',
  styleUrls: ['../subscription-form/subscription-form.component.scss', '../modal/modal.component.scss']
})
export class LeadsSubscriptionFormComponent extends SubscriptionFormComponent {
  @Input() leadMagnet: string;
  @Input() nicheId: number;

  constructor(cookieService: CookieService, dataService: DataService, router: Router) { super(cookieService, dataService, router); }

  setData() {
    this.data = {
      name: this.name,
      email: this.email,
      nicheId: this.nicheId,
      leadMagnet: this.leadMagnet
    }
    this.postData();
  }

  setResponse(response) {
    this.dataService.data = response;
    super.setResponse(response);
  }

  nextAction(response) { 
    this.router.navigate(['/thank-you']);
  }

  close(){
    ModalFormComponent.prototype.close.call(this);
  }
}
