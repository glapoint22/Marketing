import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: any;
  @Output() onShowSubscriptionForm = new EventEmitter<void>();

  constructor(private cookieService: CookieService) { }

  onClick(url: string) {
    if (this.cookieService.check('Customer')) {
      window.location.href = url;
    }else{
      this.onShowSubscriptionForm.emit();
    }
  }
}