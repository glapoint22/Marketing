import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from "../data.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: any;
  @Output() onShowSubscriptionForm = new EventEmitter<void>();

  constructor(private cookieService: CookieService, private dataService: DataService) { }

  onClick(product, showSubscriptionForm) {
    if (this.cookieService.check('Customer')) {
      window.location.href = product.hopLink;
    }else{
      this.dataService.data = product;
      showSubscriptionForm.emit();
    }
  }
}