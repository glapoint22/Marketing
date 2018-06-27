import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';
import { FilterService } from "./../filter.service";

@Component({
  selector: 'category-filter',
  templateUrl: '../filter/filter.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class CategoryFilterComponent extends FilterComponent implements OnInit {
  @Input() categories;
  public displayAllCategories: boolean;
  public currentCategory;
  public currentNiche;
  public query;

  constructor(private route: ActivatedRoute, filterService: FilterService) { super(filterService); }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      //Set the properties
      this.currentCategory = queryParams.get('category');
      this.currentNiche = queryParams.get('nicheId');
      this.query = queryParams.get('query');
      this.displayAllCategories = false;

      //Set categories to not show all niches
      for (let i = 0; i < this.categories.length; i++) {
        this.categories[i]['showAllNiches'] = false;
      }
    });
  }

  getProductCount(category) {
    return category.niches.map(a => a.productCount).reduce((a, b) => a + b);
  }
}