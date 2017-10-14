import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import {trigger, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categories: Array<object> = [{"name":"All Categories","value":"All"},{"name":"Books","value":"Books"}];
  public selectedCategory: Object = {};
  public translate = 0;
  public bannerImages: Array<any> = [{"name":"Costumes.png","url":"http://www.walmar.com", "pos": 0},
                                        {"name":"Halloween.png","url":"http://www.target.com", "pos": 100},
                                        {"name":"2WeekDiet.png","url":"http://www.amazon.com", "pos": 200},
                                        {"name":"Delight.jpg","url":"http://www.target.com", "pos": 300},
                                        {"name":"Fall.jpg","url":"http://www.target.com", "pos": 400}
                                      ];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.selectedCategory = this.categories[0];
  }

  moveSlider(direction: number){
    /* Based on the direction passed in, set the position 
    of the image that is either at the beginning of the slide 
    or at the end so that it crates a continuous loop */
    this.bannerImages[this.getIndex(direction)].pos = this.getPosition(direction) - 100 * direction;

    //Move the slider based on the direction passed in
    this.translate += 100 * direction;
  }

  getPosition(direction: number){
    let minPos = Number.POSITIVE_INFINITY;
    let maxPos = Number.NEGATIVE_INFINITY;
    let pos: number;

    //Get either the min or max position from the images based on the direction passed in
    for(let i = 0; i < this.bannerImages.length; i++){
      if(direction === -1){
        pos = maxPos = Math.max(maxPos, this.bannerImages[i].pos);
      }else{
        pos = minPos = Math.min(minPos, this.bannerImages[i].pos);
      }
    }
    return pos;
  }

  getIndex(direction: number){
    //Get the index of the image that will be shifting
    return this.bannerImages.findIndex(x => x.pos === this.getPosition(-direction));
  }
}