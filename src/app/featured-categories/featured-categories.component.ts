import { Component } from '@angular/core';
import { SearchBarService } from "../search-bar.service";
import { Router } from '@angular/router';

@Component({
  selector: 'featured-categories',
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.scss']
})
export class FeaturedCategoriesComponent {
  constructor(public searchBarService: SearchBarService, private router: Router) { }

  onClick(category: number) {
    this.router.navigate(['/search'], { queryParams: { 'category': category } });
  }
}