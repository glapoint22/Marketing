import { Component, OnInit } from '@angular/core';

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

  public translate = 0;
  public index: number = 0;
  public play: boolean = true;
  public curve: string = 'ease-in-out';
  public speed: number = this.defaultSpeed;
  public carouselImages: Array<any> = [
    { "name": "Costumes.png", "url": "http://www.walmar.com", "pos": 0 },
    { "name": "Halloween.png", "url": "http://www.target.com", "pos": 100 },
    { "name": "2WeekDiet.png", "url": "http://www.amazon.com", "pos": 200 },
    { "name": "Delight.jpg", "url": "http://www.target.com", "pos": 300 },
    { "name": "Fall.jpg", "url": "http://www.target.com", "pos": 400 }
  ];

  constructor() { }

  ngOnInit() {
    this.startTimer(this.currentDirection);
  }

  moveSlider(direction: number) {
    //Move the slider based on the direction passed in
    this.translate += 100 * direction;

    //Get the current and next image index
    this.index = this.getIndex(this.translate);
    let nextIndex = this.getIndex(this.translate + 100 * direction);

    //Change the position of the images so it creates a continous loop
    if (this.carouselImages[nextIndex].pos < this.carouselImages[this.index].pos) {
      this.carouselImages[this.findIndex(direction)].pos = this.getPosition(direction) - 100 * direction;
    }
  }

  getIndex(translate): number {
    let index = (Math.abs(translate) / 100) % this.carouselImages.length;
    if (translate > 0 && index != 0) {
      index = this.carouselImages.length - index;
    }
    return index;
  }

  getPosition(direction: number) {
    let minPos = Number.POSITIVE_INFINITY;
    let maxPos = Number.NEGATIVE_INFINITY;
    let pos: number;

    //Get either the min or max position from the images based on the direction passed in
    for (let i = 0; i < this.carouselImages.length; i++) {
      if (direction === -1) {
        pos = maxPos = Math.max(maxPos, this.carouselImages[i].pos);
      } else {
        pos = minPos = Math.min(minPos, this.carouselImages[i].pos);
      }
    }
    return pos;
  }

  findIndex(direction: number) {
    //Find the index of the image that will be shifting
    return this.carouselImages.findIndex(x => x.pos === this.getPosition(-direction));
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
