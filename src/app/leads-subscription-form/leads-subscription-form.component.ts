import { Component, Input } from '@angular/core';
import { SubscriptionFormComponent } from '../subscription-form/subscription-form.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'leads-subscription-form',
  templateUrl: '../subscription-form/subscription-form.component.html',
  styleUrls: ['../subscription-form/subscription-form.component.scss', '../modal/modal.component.scss']
})
export class LeadsSubscriptionFormComponent extends SubscriptionFormComponent {
  @Input() leadMagnet: string;
  @Input() nicheId: number;

  setData() {
    this.data = {
      name: this.name,
      email: this.email,
      nicheId: this.nicheId,
      leadMagnet: this.leadMagnet
    }
    this.postData();
  }

  nextAction(response) {
    this.router.navigate(['/thank-you'], {
      queryParams: {
        'customer': response.customer.name,
        'email': response.customer.email,
        'leadMagnet': response.leadMagnet,
        'customerId': response.customer.id,
      }
    });
  }

  close() {
    ModalFormComponent.prototype.close.call(this);
  }
}