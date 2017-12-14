import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['../filter/filter.component.scss', './category-filter.component.scss']
})
export class CategoryFilterComponent extends FilterComponent implements OnInit {
  @Input() categories;
  private displayAllCategories: boolean;
  private currentCategory;
  private currentNiche;

  constructor(route: ActivatedRoute, router: Router) { super(route, router); }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      //Set the properties
      this.currentCategory = queryParams.get('category');
      this.currentNiche = queryParams.get('nicheId');
      this.displayAllCategories = false;

      //Set categories to not show all niches
      for (let i = 0; i < this.categories.length; i++) {
        this.categories[i]['showAllNiches'] = false;
      }
    });
  }
}
