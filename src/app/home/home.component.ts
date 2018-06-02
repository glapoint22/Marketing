import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { CookieService } from 'ngx-cookie-service';
import { ShowModalService } from "../show-modal.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productSliders;

  constructor(private dataService: DataService, private cookieService: CookieService, private showModalService: ShowModalService) { }

  ngOnInit() {
    this.showModalService.showLoading(true);

    if (this.cookieService.check('Customer')) {
      this.dataService.get('api/Products', [{ key: 'customerId', value: this.cookieService.get('Customer') }])
        .subscribe((response: any) => {
          this.productSliders = response;
          this.showModalService.showLoading(false);
        });
    } else {
      this.dataService.get('api/Products')
        .subscribe((response: any) => {
          this.productSliders = response;
          this.showModalService.showLoading(false);
        });
    }
  }
}