import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";
import { FilterService } from "./../filter.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public totalProducts: number;
  private products;
  private pages: number;
  private productStart: number;
  private productEnd: number;
  private query: string;
  private page: number;
  private pageList: Array<string> = [];
  private categories;
  private filters;

  //Sort Options
  private selectedSortOption: any;
  private sortOptions = [];

  //Products per page
  private productsPerPage: number;
  private perPageOptions = [24, 48, 72, 96];

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router, private filterService: FilterService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let parameters: Array<any> = [];
      this.query = queryParams.get('query');

      //Set the sort options
      this.sortOptions = [
        {
          name: 'Sort by Price: Low to High',
          value: 'price-asc'
        },
        {
          name: 'Sort by Price: High to Low',
          value: 'price-desc'
        }
      ];

      if(this.query){
        this.sortOptions.unshift({
          name: 'Sort by Relevance',
          value: 'relevance'
        });
      }

      //Populate the dropdowns
      setTimeout(() => {
        let index = this.sortOptions.findIndex(x => x.value === queryParams.get('sort'));
        this.selectedSortOption = this.sortOptions[index == -1 ? 0 : index];

        let perPage = Number(queryParams.get('limit'));
        this.productsPerPage = perPage === 0 ? this.perPageOptions[0] : perPage;
      });

      //Set the parameters array from the query params
      for (let i = 0; i < queryParams.keys.length; i++) {
        parameters.push({ key: queryParams.keys[i], value: queryParams.get(queryParams.keys[i]) });
      }

      //Set the default sort option if not part of the query params
      if (parameters.findIndex(x => x.key === 'sort') === -1) {
        parameters.push({ key: 'sort', value: this.sortOptions[0].value });
      }

      //Set the default per page option if not part of the query params
      if (parameters.findIndex(x => x.key === 'limit') === -1) {
        parameters.push({ key: 'limit', value: this.perPageOptions[0] });
      }

      //Get the products
      this.dataService.get('api/Products', parameters)
        .subscribe((response: any) => {
          //Assign properties and variables
          let body = document.scrollingElement || document.documentElement;
          this.pageList = [];
          this.page = response.page;
          this.products = response.products;
          this.totalProducts = response.totalProducts;
          this.productStart = this.productsPerPage * (this.page - 1) + 1;
          this.productEnd = this.productStart + response.products.length - 1;
          this.pages = Math.ceil(this.totalProducts / this.productsPerPage);
          this.categories = response.categories;
          this.filters = response.filters;

          //Scroll to top
          body.scrollTop = 0;

          //Pages
          this.pageList.push('1');
          if (this.page >= 5 && this.pages > 7) {
            this.pageList.push('...');

            if (this.pages - this.page < 4) {
              for (let i = this.pages - 5; i < this.pages; i++) {
                this.pageList.push(i.toString());
              }
            } else {
              for (let i = this.page - 2; i < Math.min(this.page + 3, this.pages); i++) {
                this.pageList.push(i.toString());
              }
            }
            if (this.pages - this.page > 3) this.pageList.push('...');
          } else {
            for (let i = 2; i <= Math.min(this.pages - 1, 6); i++) {
              this.pageList.push(i.toString());
            }
            if (this.pages > 7) this.pageList.push('...');
          }
          if (this.pages > 1) this.pageList.push(this.pages.toString());
        }, error => {
          // this.dataService.data = error;
          // this.router.navigate(['/error']);
        });
    });
  }

  onArrowClick(direction) {
    this.setPage(this.page + direction);
  }

  onPageClick(page) {
    if (page !== '...') {
      this.setPage(page);
    }
  }

  setPage(page) {
    this.router.navigate(['/search'], {
      queryParams: { 'page': page },
      queryParamsHandling: 'merge'
    });
  }

  trackById(index: number, product: any) {
    return product.id;
  }
}
