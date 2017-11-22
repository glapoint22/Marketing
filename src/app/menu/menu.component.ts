import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from "../data.service";
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private productComponent: ProductComponent;

  @Output() onShowSubscriptionForm = new EventEmitter<void>();
  public showMenu: boolean;
  public showNicheList: boolean;
  @Input() categories: any;
  public currentCategory: any;

  constructor(private cookieService: CookieService, private dataService: DataService) { }

  ngOnInit() {
    this.productComponent = new ProductComponent(this.cookieService, this.dataService);
    this.productComponent.onShowSubscriptionForm = this.onShowSubscriptionForm;
  }

  onProductClick(product){
    this.productComponent.product = product;
    this.productComponent.onClick();
  }

  onNicheClick(niche){
    
  }
}
