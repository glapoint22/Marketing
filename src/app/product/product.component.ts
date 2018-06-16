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
    if (this.cookieService.check('Products')) {
      let products: Array<string> = this.cookieService.get('Products').split('~');
      if (products.findIndex(x => x === this.product.id) === -1) {
        products.push(this.product.id);
        this.cookieService.set('Products', products.join('~'), 9999);
      }
    } else {
      this.cookieService.set('Products', this.product.id, 9999);
    }

    if (this.cookieService.check('Customer')) {
      this.showModalService.showLoading(true);
      window.location.href = this.product.hopLink;
    } else {
      this.showModalService.showSubscriptionForm(this.product);
    }
  }
}