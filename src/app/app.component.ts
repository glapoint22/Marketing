import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ShowModalService } from './show-modal.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public isError: boolean;

  constructor(private router: Router, private showModalService: ShowModalService, private dataService: DataService) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.showModalService.showSubscriptionForm('close');
      }
    });

    this.dataService.get('api/Customers/Session').subscribe((response) => {
      response;
     });
  }

  ngAfterContentChecked() {
    this.isError = document.getElementById('error') !== null;
  }
}