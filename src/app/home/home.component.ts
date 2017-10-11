import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categories: Array<object> = [{"name":"All Categories","value":"All"},{"name":"Books","value":"Books"}];
  public selectedCategory: Object = {};
  public bannerImages: Array<object> = [{"name":"Costumes.png","url":"http://www.walmar.com"},{"name":"Halloween.png","url":"http://www.target.com"},{"name":"2WeekDiet.png","url":"http://www.amazon.com"}];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.selectedCategory = this.categories[0];
  }

  onBannerArrowClick(){
    console.log("Hello");
  }
}
