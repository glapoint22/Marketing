import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() onShowSubscriptionForm = new EventEmitter<void>();
  private customerId: string ;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.check('Customer')) this.customerId = this.cookieService.get('Customer');
  }

}
