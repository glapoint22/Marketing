import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public query: string;

  constructor(public dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  stopPropagation(event): void {
    event.stopPropagation();
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      //Get the search words from the url
      this.query = queryParams.get('query');
      
      //Get the category from the url
      if (this.dataService.searchBar.categories) {
        let id = this.dataService.searchBar.searchCategories.findIndex(x => x.id == Number(queryParams.get('category')));
        this.dataService.searchBar.selectedCategory = this.dataService.searchBar.searchCategories[id];
      }
    });

    //Assign the categories if not already done
    if (!this.dataService.searchBar.categories) {
      this.dataService.searchBar['selectedCategory'] = {};
      this.dataService.get('api/Categories')
        .subscribe((response: any) => {
          this.dataService.searchBar['categories'] = response;
          let searchCategories = this.dataService.searchBar.categories.slice().map(x => ({ id: x.id, name: x.name }));
          searchCategories.unshift({ name: 'All', id: 0 });
          this.dataService.searchBar['searchCategories'] = searchCategories;
          this.dataService.searchBar['selectedCategory'] = searchCategories[0];
          this.dataService.searchBar['featuredCategories'] = this.dataService.searchBar.categories.slice().filter(x => x.featured);

          this.dataService.error = null;
        }, error => {
          this.dataService.error = error;
        });
    }
  }

  onSearchButtonClick(query, category) {
    if (query !== '') {
      this.router.navigate(['/search'], { queryParams: { 'query': query, 'category': category } });
    }
  }
}
