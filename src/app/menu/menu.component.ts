import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from "../data.service";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() onShowSubscriptionForm = new EventEmitter<void>();
  public showMenu: boolean;
  public showNicheList: boolean;
  @Input() categories: any;
  public currentCategory: any;

  constructor(private cookieService: CookieService, private dataService: DataService) { }

  onProductClick(product){
    if (this.cookieService.check('Customer')) {
      window.location.href = product.hopLink;
    }else{
      this.dataService.data = product;
      this.onShowSubscriptionForm.emit();
    }
  }

  onNicheClick(niche){
    
  }

  ngOnInit() {
    
  }
}
