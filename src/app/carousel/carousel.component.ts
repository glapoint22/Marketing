import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';
import { ProductComponent } from "../product/product.component";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  private interval: number = 0;
  private currentDirection = -1;
  private iterations: number = 1;
  private defaultSpeed: number = 0.3;
  private arrowClicked: boolean = false;
  private productComponent: ProductComponent;

  public translate = 0;
  public index: number = 0;
  public play: boolean = true;
  public curve: string = 'ease-in-out';
  public speed: number = this.defaultSpeed;
  @Output() onShowSubscriptionForm = new EventEmitter<void>();
  public productBanners: Array<any>;

  constructor(private dataService: DataService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    this.productComponent = new ProductComponent(this.cookieService, this.dataService);
    this.productComponent.onShowSubscriptionForm = this.onShowSubscriptionForm;

    this.dataService.get('api/ProductBanners')
    .subscribe((response: any) => {
      this.productBanners = response;

      //Add the pos property
      for(let i = 0; i < this.productBanners.length; i++){
        this.productBanners[i]['pos'] = i * 100;
      }
      
      //Start the timer
      this.startTimer(this.currentDirection);
    }, error => {
      this.dataService.data = error;
      this.router.navigate(['/error']);
    });
  }

  onProductBannerClick(product){
    this.productComponent.product = product;
    this.productComponent.onClick();
  }

  moveSlider(direction: number) {
    //Move the slider based on the direction passed in
    this.translate += 100 * direction;

    //Get the current and next image index
    this.index = this.getIndex(this.translate);
    let nextIndex = this.getIndex(this.translate + 100 * direction);

    //Change the position of the images so it creates a continous loop
    if (this.productBanners[nextIndex].pos < this.productBanners[this.index].pos) {
      this.productBanners[this.findIndex(direction)].pos = this.getPosition(direction) - 100 * direction;
    }
  }

  getIndex(translate): number {
    let index = (Math.abs(translate) / 100) % this.productBanners.length;
    if (translate > 0 && index != 0) {
      index = this.productBanners.length - index;
    }
    return index;
  }

  getPosition(direction: number) {
    let minPos = Number.POSITIVE_INFINITY;
    let maxPos = Number.NEGATIVE_INFINITY;
    let pos: number;

    //Get either the min or max position from the images based on the direction passed in
    for (let i = 0; i < this.productBanners.length; i++) {
      if (direction === -1) {
        pos = maxPos = Math.max(maxPos, this.productBanners[i].pos);
      } else {
        pos = minPos = Math.min(minPos, this.productBanners[i].pos);
      }
    }
    return pos;
  }

  findIndex(direction: number) {
    //Find the index of the image that will be shifting
    return this.productBanners.findIndex(x => x.pos === this.getPosition(-direction));
  }

  onArrowClick(direction: number) {
    if (!this.arrowClicked) {
      this.arrowClicked = true;
      this.nextImage(-direction);
    } else {
      this.iterations += 1;
    }
  }

  startTimer(direction: number): void {
    this.interval = window.setInterval(() => {
      this.moveSlider(direction);
    }, 5000);
  }

  onPlayClick() {
    this.play = !this.play;

    if (!this.play) {
      //Stop the timer
      window.clearInterval(this.interval);
    } else {
      this.moveSlider(this.currentDirection);
      this.startTimer(this.currentDirection);
    }
  }

  onPaginatorClick(page: number) {
    let offset = this.index - page;
    this.currentDirection = Math.sign(offset);
    this.iterations = Math.abs(offset);
    this.speed = this.defaultSpeed / this.iterations;

    if (this.iterations > 1) {
      this.curve = 'linear'
    } else {
      this.curve = 'ease-in-out';
    }

    this.nextImage(this.currentDirection);
  }



  nextImage(direction: number) {
    //Stop the timer
    window.clearInterval(this.interval);

    this.currentDirection = direction;

    //Go to the next image and restart the timer
    this.moveSlider(direction);
    if (this.play) this.startTimer(direction);
  }



  transitionEnd() {
    if (this.iterations > 1) {
      this.iterations -= 1;
      this.curve = 'linear';
      this.nextImage(this.currentDirection);
    } else {
      this.curve = 'ease-in-out';
      this.arrowClicked = false;
    }
    this.speed = this.defaultSpeed / this.iterations;
  }
}
