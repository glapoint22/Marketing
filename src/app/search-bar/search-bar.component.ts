import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() onShowSubscriptionForm = new EventEmitter<void>();
  public categories: Array<any>;
  public searchCategories: Array<any>;
  public selectedCategory: any = {};

  constructor(private dataService: DataService, private router: Router) { }

  stopPropagation(event): void {
    event.stopPropagation();
  }

  ngOnInit() {
    this.dataService.get('api/Categories')
      .subscribe((response: any) => {
        this.categories = response;
        this.searchCategories = this.categories.slice();
        this.searchCategories.unshift({ name: 'All', id: 0 });
        this.selectedCategory = this.searchCategories[0];
      }, error => {
        this.dataService.data = error;
        this.router.navigate(['/error']);
      });
  }

  onSearchButtonClick(query, category) {
    if (query !== '') {
      this.router.navigate(['/search'], {queryParams: {'query': query, 'category': category}});
    }
  }
}
