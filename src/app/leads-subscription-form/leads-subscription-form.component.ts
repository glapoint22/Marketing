import { Component, Input } from '@angular/core';
import { SubscriptionFormComponent } from '../subscription-form/subscription-form.component';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'leads-subscription-form',
  templateUrl: '../subscription-form/subscription-form.component.html',
  styleUrls: ['../subscription-form/subscription-form.component.scss', '../modal/modal.component.scss']
})
export class LeadsSubscriptionFormComponent extends SubscriptionFormComponent {
  @Input() leadMagnet: string;
  @Input() nicheId: number;

  constructor(cookieService: CookieService, dataService: DataService, router: Router, private sanitizer: DomSanitizer) { super(cookieService, dataService, router); }

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
    // this.dataService.data['customer'] = response.customer.name;
    this.dataService.data['content']= this.sanitizer.bypassSecurityTrustHtml('An email has been sent to <b><i>' + response.customer.email + 
      '</i></b> where you will be able to download your <b><i>' + response.leadMagnet + 
      '</i></b>. If you don’t see your new email, check your spam folder and please be sure to whitelist the ' + 
      'p2pMarketing email address. I have more exciting offers I\'d love to send you, but I don\'t want to spam ' + 
      'your inbox. At the bottom of this page is a link to your <a style="color: #ab0395" href="/preferences?cid=' + response.customer.id + 
      '">email subscriptions</a> where you can set how often mail is sent to you. ' + 
      'You will also be able to update your personal information. You can access your email ' + 
      'subscriptions at any time by clicking on the <a style="color: #ab0395" href="/preferences?cid=' + response.customer.id + 
      '">Manage Email Subscriptions</a> link at the bottom of every email I send you.');
    this.router.navigate(['/thank-you']);
  }

  close(){
    ModalFormComponent.prototype.close.call(this);
  }
}
