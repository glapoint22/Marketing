import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  public name: string;
  public email: string;
  public preferenceList: Array<any> = [];

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit() {
    let preferences;
    let frequency = {
      0: 'unsubscribed from all subscriptions',
      1: 'daily',
      3: 'twice a week',
      7: 'once a week',
      14: 'twice a month',
      30: 'once a month',
    }

    if (this.dataService.data && this.dataService.data.updatedSubscriptions) {
      preferences = this.dataService.data;

      this.name = preferences.customer.Name;
      this.email = preferences.customer.Email;

      if (preferences.customer.EmailSendFrequency === 0) {
        this.preferenceList.push(`Unsubscribed from all subscriptions`);
        return;
      }

      if (preferences.customerModified) {
        if (this.name.toLocaleLowerCase() !== preferences.customer.originalName.toLocaleLowerCase()) {
          this.preferenceList.push(`Name was updated from ${preferences.customer.originalName} to ${this.name}`);
        }

        if (this.email.toLocaleLowerCase() !== preferences.customer.originalEmail.toLocaleLowerCase()) {
          this.preferenceList.push(`Email was updated from ${preferences.customer.originalEmail} to ${this.email}`);
        }

        if (preferences.customer.EmailSendFrequency !== preferences.customer.originalEmailSendFrequency) {
          this.preferenceList.push(`How often to send you mail was updated from ${frequency[preferences.customer.originalEmailSendFrequency]} to ${frequency[preferences.customer.EmailSendFrequency]}`);
        }
      }

      for (let i = 0; i < preferences.updatedSubscriptions.length; i++) {
        this.preferenceList.push(preferences.updatedSubscriptions[i].isSubscribed ? `Subscriibed to ${preferences.updatedSubscriptions[i].nicheName}` : `Unsubscribed from ${preferences.updatedSubscriptions[i].nicheName}`);
      }

    }
  }
}