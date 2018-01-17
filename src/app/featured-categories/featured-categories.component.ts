import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.scss']
})
export class FeaturedCategoriesComponent implements OnInit {
  private showFeatured: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
