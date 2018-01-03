import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  public subscriptions;
  public customerId;
  public name: string;
  public email: string;
  public emailSendFrequency: number;
  public originalName: string;
  public originalEmail: string;
  public originalEmailSendFrequency: number;
  public updatedSubscriptions: Array<any> = [];
  public isUpdated: boolean = false;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // if (this.dataService.data && this.dataService.data.customer) {
      //Get the data from the data service
      // this.init(this.dataService.data);
    // } else {
      this.route.queryParamMap.subscribe(queryParams => {
        //Get the customer id from the query params
        let customerId = queryParams.get('cid');

        //If customer id is null, navigate back to route
        if(customerId === null){
          this.router.navigate(['']);
          return;
        }
        
        //Get the preferences
        this.dataService.get('api/Subscriptions', [{key: 'customerId', value: customerId}])
          .subscribe((response: any) => {
            this.init(response);
          }, error => {
            this.dataService.data = error;
            this.router.navigate(['/error']);
          });
      });
    // }
  }

  init(data){
    this.customerId = data.customer.id;
    this.subscriptions = data.subscriptions;
    this.originalName = this.name = data.customer.name;
    this.originalEmail = this.email = data.customer.email;
    this.originalEmailSendFrequency = this.emailSendFrequency = data.customer.emailSendFrequency;
  }

  onUpdate() {
    //Check to see if anything has been updated
    if (this.name.toLocaleLowerCase() !== this.originalName.toLocaleLowerCase() ||
      this.email.toLocaleLowerCase() !== this.originalEmail.toLocaleLowerCase() ||
      this.emailSendFrequency !== this.originalEmailSendFrequency ||
      this.updatedSubscriptions.length > 0) {
      this.isUpdated = true;
    } else {
      this.isUpdated = false;
    }
  }

  onUpdateSubscription(niche) {
    //Check to see if this niche is in the array
    let index = this.updatedSubscriptions.findIndex(x => x.id == niche.id);

    //Set the value
    niche.isSubscribed = !niche.isSubscribed;

    if (index > -1) {
      //Remove this niche from the array. This niche is not getting updated
      this.updatedSubscriptions.splice(index, 1);
    } else {
      //Add this niche to the array. This niche has been updated
      this.updatedSubscriptions.push({
        subscriptionId: niche.subscriptionId,
        isSubscribed: niche.isSubscribed,
        nicheId: niche.id,
        nicheName: niche.name
      });
    }
    this.onUpdate();
  }

  onSubmit(form) {

    //Unsubscribing from all subscriptions
    if (this.emailSendFrequency === 0) {
      this.updatedSubscriptions = [];
    }

    //The data that will be sent
    let preferences = {
      customerModified: this.name.toLocaleLowerCase() !== this.originalName.toLocaleLowerCase() ||
        this.email.toLocaleLowerCase() !== this.originalEmail.toLocaleLowerCase() ||
        this.emailSendFrequency !== this.originalEmailSendFrequency ? true : false,
      customer: {
        ID: this.customerId,
        Name: this.name,
        Email: this.email,
        EmailSendFrequency: this.emailSendFrequency,
        originalName: this.originalName,
        originalEmail: this.originalEmail,
        originalEmailSendFrequency: this.originalEmailSendFrequency
      },
      updatedSubscriptions: this.updatedSubscriptions
    };

    //Send the updated data
    this.dataService.put('api/Subscriptions', preferences)
      .subscribe((response: any) => {
        this.dataService.data = preferences;
        this.router.navigate(['/confirm']);
      }, error => {
        this.dataService.data = error;
        this.router.navigate(['/error']);
      });
  }
}