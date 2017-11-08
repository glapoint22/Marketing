import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss', '../modal/modal.component.scss']
})
export class SubscriptionFormComponent extends ModalComponent {
  @Input() caption: string;
  @Input() buttonText: string;

  constructor(private cookieService: CookieService) {super(); }

  onSubmit(form): void {
    if (form.form.status === 'VALID') {
      this.show = false;
      // this.isLoading = true;
      // let body = {
      //     email: this.email,
      //     name: this.name,
      //     nicheId: this.nicheId,
      //     leadMagnet: this.leadMagnet
      // }

      // this.dataService.post('api/Subscriptions', body)
      //   .subscribe((response: any) => {
      //       this.dataService.data =  response;
      //       if(!this.cookieService.check('Customer')){
      //         this.cookieService.set('Customer', response.preferences.customer.id, 9999);
      //       }

      //       this.router.navigate(['/thank-you']);
      //     }, error => {
      //       this.dataService.data = error;
      //       this.router.navigate(['/error']);
      //     });
    }
  }



}
