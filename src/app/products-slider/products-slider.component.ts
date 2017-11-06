import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent implements OnInit {
  public margin: number = 20;
  public lastPage: boolean = false;
  public translate = 0;
  @Input() caption: string;
  @Input() products;

  private currentIndex = 0;
  private currentTranslation = 0;
  private translations: Array<any> = [{'translate': 0, 'index': 0}];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit() {
    // this.products = [
    //   {"videos": ['//player.vimeo.com/video/203810510?title=0&byline=0&portrait=0&color=ffffff','//player.vimeo.com/video/195471382?title=0&byline=0&portrait=0&color=ffffff', '//player.vimeo.com/video/196271312?title=0&byline=0&portrait=0&color=ffffff'], "name": "The 2 Week Diet", "description": "A Foolproof, Science-Based System that's Guaranteed to Melt Away All Your Unwanted Stubborn Body Fat in Just 14 Days.", "image": "2WeekDiet.gif", "hopLink": "http://www.walmar.com" },
    //   {"videos": [], "name": "Unlock Your Hip Flexors", "description": "The \"Hidden Survival Muscle\" In Your Body Missed By Modern Physicians ", "image": "Unlock-Your-Hip-Flexors.png", "hopLink": "http://www.target.com" },
    //   {"videos": [], "name": "2 Week Diet", "description": "A Foolproof, Science-Based System that's Guaranteed to Melt Away All Your Unwanted Stubborn Body Fat in Just 14 Days.", "image": "diabetes-lie-3d.png", "hopLink": "http://www.target.com" },
    //   {"videos": [], "name": "2 Week Diet", "description": "A Foolproof, Science-Based System that's Guaranteed to Melt Away All Your Unwanted Stubborn Body Fat in Just 14 Days.", "image": "leanbelly.png", "hopLink": "http://www.target.com" },
    //   {"videos": [], "name": "2 Week Diet", "description": "A Foolproof, Science-Based System that's Guaranteed to Melt Away All Your Unwanted Stubborn Body Fat in Just 14 Days.", "image": "organifi.png", "hopLink": "http://www.target.com" },
    //   {"videos": [], "name": "2 Week Diet", "description": "A Foolproof, Science-Based System that's Guaranteed to Melt Away All Your Unwanted Stubborn Body Fat in Just 14 Days.", "image": "EatStopEat.png", "hopLink": "http://www.target.com" },
    //   {"videos": [], "name": "2 Week Diet", "description": "A Foolproof, Science-Based System that's Guaranteed to Melt Away All Your Unwanted Stubborn Body Fat in Just 14 Days.", "image": "WakeUpLean.png", "hopLink": "http://www.target.com" },
    //   {"videos": [], "name": "2 Week Diet", "description": "A Foolproof, Science-Based System that's Guaranteed to Melt Away All Your Unwanted Stubborn Body Fat in Just 14 Days.", "image": "hnm2.jpg", "hopLink": "http://www.target.com" },
    //   {"videos": ['//player.vimeo.com/video/203810510?title=0&byline=0&portrait=0&color=ffffff'], "name": "2 Week Diet", "description": "A Foolproof, Science-Based System that's Guaranteed to Melt Away All Your Unwanted Stubborn Body Fat in Just 14 Days.", "image": "box-medium.jpg", "hopLink": "http://www.target.com" },
    //   {"videos": [], "name": "2 Week Diet", "description": "A Foolproof, Science-Based System that's Guaranteed to Melt Away All Your Unwanted Stubborn Body Fat in Just 14 Days.", "image": "book.png", "hopLink": "http://www.target.com" },
    //   {"videos": [], "name": "2 Week Diet", "description": "A Foolproof, Science-Based System that's Guaranteed to Melt Away All Your Unwanted Stubborn Body Fat in Just 14 Days.", "image": "ynm3.jpg", "hopLink": "http://www.target.com" },
    //   {"videos": [], "name": "2 Week Diet", "description": "A Foolproof, Science-Based System that's Guaranteed to Melt Away All Your Unwanted Stubborn Body Fat in Just 14 Days.", "image": "ad2.jpg", "hopLink": "http://www.target.com" },
  
    // ];
  }

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