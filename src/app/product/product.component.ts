import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ShowModalService } from "../show-modal.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: any;

  constructor(private cookieService: CookieService, private showModalService: ShowModalService) { }

  onClick() {
    if (this.cookieService.check('Customer')) {
      window.location.href = this.product.hopLink;
    } else {
      this.showModalService.showSubscriptionForm(this.product);
    }
  }
}