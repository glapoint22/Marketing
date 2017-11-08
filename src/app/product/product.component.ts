import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: any;

  constructor(private cookieService: CookieService) { }

  onClick(url: string) {
    if (this.cookieService.check('Customer')) {
      window.location.href = url;
    }
  }
}