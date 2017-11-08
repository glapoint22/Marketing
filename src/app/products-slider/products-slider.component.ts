import { Component, Input} from '@angular/core';


@Component({
  selector: 'products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent {
  public margin: number = 20;
  public lastPage: boolean = false;
  public translate = 0;
  @Input() caption: string;
  @Input() products;

  private currentIndex = 0;
  private currentTranslation = 0;
  private translations: Array<any> = [{'translate': 0, 'index': 0}];

  

  onArrowClick(direction: number, containerWidth: number, products: Array<any>){
    if(direction === -1){
      this.onLeftArrowClick();
    }else{
      this.onRightArrowClick(containerWidth, products);
    }
  }

  onRightArrowClick(containerWidth, products){
    let productWidthTotal = 0, i, x;

    for(i = this.currentIndex; i < products.length; i++){
      productWidthTotal += products[i].offsetWidth + this.margin;

      if(productWidthTotal > containerWidth){
        productWidthTotal -= containerWidth;
        x = products[i].offsetWidth + this.margin - productWidthTotal;
        this.currentIndex = i;
        break;
      }
    }
    for(let j = i + 1; j < products.length; j++){
      productWidthTotal += products[j].offsetWidth + this.margin;

      if(productWidthTotal > containerWidth){
        this.currentTranslation = this.translate = containerWidth - x + this.currentTranslation;
        this.translations.push({'translate': this.currentTranslation, 'index': this.currentIndex});
        return;
      }
    }

    this.currentTranslation = this.translate = productWidthTotal - this.margin + this.currentTranslation;
    this.translations.push({'translate': this.currentTranslation, 'index': this.currentIndex});
    this.lastPage = true;
    
    
  }

  onLeftArrowClick(){
    this.lastPage = false;
    this.currentTranslation = this.translate = this.translations[this.translations.length - 2].translate;
    this.currentIndex = this.translations[this.translations.length - 2].index;
    this.translations.pop();
  }
}