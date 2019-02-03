import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ShowModalService } from './show-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public isError: boolean;

  constructor(router: Router, showModalService: ShowModalService) {
    router.events.subscribe((val) => {
        if(val instanceof NavigationEnd){
          showModalService.showSubscriptionForm('close');
        }
    });
  }
  ngAfterContentChecked() {
    this.isError = document.getElementById('error') !== null;
  }
}