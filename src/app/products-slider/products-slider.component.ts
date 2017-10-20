import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent implements OnInit {
  public translate = 0;
  private currentIndex = 0;
  private currentTranslation = 0;

  public products: Array<any> = [
    { "name": "2WeekDiet.gif", "url": "http://www.walmar.com" },
    { "name": "2WeekDiet.gif", "url": "http://www.target.com" },
    { "name": "2WeekDiet.gif", "url": "http://www.amazon.com" },
    { "name": "2WeekDiet.gif", "url": "http://www.target.com" },
    { "name": "2WeekDiet.gif", "url": "http://www.target.com" }
  ];

  constructor() { }

  ngOnInit() {
    
  }

  onArrowClick(containerWidth, sliderWidth, products){
    let productWidthTotal = 0, i, x;

    for(i = this.currentIndex; i < products.length; i++){
      productWidthTotal += products[i].offsetWidth + 10;

      if(productWidthTotal > containerWidth){
        productWidthTotal -= containerWidth;
        x = products[i].offsetWidth + 10 - productWidthTotal;
        this.currentIndex = i;
        break;
      }
    }
    for(let j = i + 1; j < products.length; j++){
      productWidthTotal += products[j].offsetWidth + 10;

      if(productWidthTotal > containerWidth){
        this.currentTranslation = this.translate = containerWidth - x + this.currentTranslation;
        return;
      }
    }

    this.currentTranslation = this.translate = productWidthTotal - 10 + this.currentTranslation;
    
    
    
    
  }

}
