import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public showMenu: boolean;
  public showNicheList: boolean;
  public categories: any;
  public currentCategory: any;

  constructor() { }

  ngOnInit() {
    this.categories = [
      {
        name: 'Arts & Entertainment',
        niches: [
          {
            id: 1,
            name: 'Architecture'
          },
          {
            id: 2,
            name: 'Art'
          },
          {
            id: 3,
            name: 'Body Art'
          },
          {
            id: 4,
            name: 'Dance'
          }
        ]
      },

      {
        name: 'As Seen on TV',
        niches: [
          {
            id: 20,
            name: 'Auto'
          },
          {
            id: 21,
            name: 'Backyard Living'
          },
          {
            id: 23,
            name: 'Health and Beauty'
          },
          {
            id: 29,
            name: 'Kitchen Tools and Gadgets'
          },
        ]
      },
      {
        name: 'Betting Systems',
        niches: [
          {
            id: 20,
            name: 'Casino Table Games'
          },
          {
            id: 21,
            name: 'Football'
          },
          {
            id: 23,
            name: 'Horse Racing'
          },
          {
            id: 29,
            name: 'Poker'
          },
        ]
      },
    ]
  }
}
