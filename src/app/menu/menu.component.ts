import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  public categories: any;
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
    this.categories = [
      {
        name: 'Arts & Entertainment',
        image: 'cat.png',
        niches: [
          {
            id: 1,
            name: 'Architecture',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          },
          {
            id: 2,
            name: 'Art',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          },
          {
            id: 3,
            name: 'Body Art',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          },
          {
            id: 4,
            name: 'Dance',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          }
        ]
      },

      {
        name: 'As Seen on TV',
        image: 'cat.png',
        niches: [
          {
            id: 20,
            name: 'Auto',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          },
          {
            id: 21,
            name: 'Backyard Living',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          },
          {
            id: 23,
            name: 'Health and Beauty',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          },
          {
            id: 29,
            name: 'Kitchen Tools and Gadgets',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          },
        ]
      },
      {
        name: 'Betting Systems',
        image: 'cat.png',
        niches: [
          {
            id: 20,
            name: 'Casino Table Games',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          },
          {
            id: 21,
            name: 'Football',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          },
          {
            id: 23,
            name: 'Horse Racing',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          },
          {
            id: 29,
            name: 'Poker',
            products: [
              {
                id: 'eftyhb45ty',
                name: 'Product1',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product2',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product3',
                hopLink: 'http://www.walmart.com'
              },
              {
                id: 'eftyhb45ty',
                name: 'Product4',
                hopLink: 'http://www.walmart.com'
              }
            ]
          },
        ]
      },
    ]
  }
}
