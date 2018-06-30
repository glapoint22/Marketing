import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from "../data.service";
import { Router, ActivatedRoute } from '@angular/router';
import { SearchBarService } from "../search-bar.service";
import { ShowModalService } from "../show-modal.service";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public query: string;
  public logo: string;

  constructor(public dataService: DataService, private router: Router, private route: ActivatedRoute, public searchBarService: SearchBarService, private showModalService: ShowModalService, private cookieService: CookieService) { }

  stopPropagation(event): void {
    event.stopPropagation();
  }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));

    this.route.queryParamMap.subscribe(queryParams => {
      //Get the search words from the url
      this.query = queryParams.get('query');

      //Get the category from the url
      if (this.searchBarService.searchBar.categories.length > 0) {
        let id = this.searchBarService.searchBar.searchCategories.findIndex(x => x.id == Number(queryParams.get('category')));
        this.searchBarService.searchBar.selectedCategory = this.searchBarService.searchBar.searchCategories[id];
      }
    });

    //Assign the categories if not already done
    if (this.searchBarService.searchBar.categories.length === 0) {
      this.dataService.get('api/Categories')
        .subscribe((response: any) => {
          this.searchBarService.searchBar.categories = response;
          let searchCategories = this.searchBarService.searchBar.categories.slice().map(x => ({ id: x.id, name: x.name }));
          searchCategories.unshift({ name: 'All', id: 0 });
          this.searchBarService.searchBar.searchCategories = searchCategories;
          this.searchBarService.searchBar.selectedCategory = searchCategories[0];
          this.searchBarService.searchBar.featuredCategories = this.searchBarService.searchBar.categories.slice().filter(x => x.featured);
        });
    }
  }

  onSearchButtonClick(query, category) {
    if (query !== '') {
      this.router.navigate(['/search'], { queryParams: { 'query': query, 'category': category } });
    }
  }
  onImageClick() {
    this.router.navigate(['/']);
  }

  onEmailClick() {
    if (this.cookieService.check('Customer')) {
      this.router.navigate(['/preferences'], { queryParams: { 'cid': this.cookieService.get('Customer') } });
    } else {
      this.showModalService.showSubscriptionForm(null);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth > 600) {
      this.logo = 'Logo.png';
    } else{
      this.logo = 'Shack.png';
    }
  }
}
