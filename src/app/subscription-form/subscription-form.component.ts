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
  public showCancelButton: boolean;

  constructor(private cookieService: CookieService, dataService: DataService, router: Router) { super(dataService, router); }

  ngOnInit(){
    this.url = 'api/Subscriptions';
    this.showCancelButton = true;
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

  nextAction() { 
    console.log('next action');
  }



  // postData(data: any) {
  //   this.dataService.post('api/Subscriptions', data)
  //     .subscribe((response: any) => {
  //       //Get the response
  //       this.dataService.data = response;
        
  //       //Check to see if a cookie is set for this customer
  //       if (!this.cookieService.check('Customer')) {
  //         this.cookieService.set('Customer', response.customer.id, 9999);
  //       }

  //       this.next();
  //     }, error => {
  //       this.dataService.data = error;
  //       this.router.navigate(['/error']);
  //     });
  // }

  // next(){
  //   this.router.navigate(['/thank-you']);
  // }
  // this.isLoading = true;
  // let body = {
  //     email: this.email,
  //     name: this.name,
  //     nicheId: this.nicheId,
  //     leadMagnet: this.leadMagnet
  // }







}
