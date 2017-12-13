import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent extends FilterComponent implements OnInit {
  @Input() categories;
  public displayAllCategories: boolean;
  public currentCategory;

  constructor(route: ActivatedRoute, router: Router) { super(route, router); }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      // //Get all the query parameters from the url
      // this.queryParameters = queryParams;
      
      this.currentCategory = queryParams.get('category')

      this.displayAllCategories = false;

      for (let i = 0; i < this.categories.length; i++) {
        this.categories[i]['showAllNiches'] = false;
      }
    });
  }
}
