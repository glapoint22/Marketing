import { Component, OnInit, HostListener } from '@angular/core';
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
  public products;
  public pages: number;
  public query: string;
  public page: number;
  public pageList: Array<string> = [];
  public categories;
  public filters;
  public showFilters: boolean = false;
  public results;

  //Sort Options
  public selectedSortOption: any;
  public sortOptions = [];

  //Products per page
  public productsPerPage: any;
  public perPageOptions = [];

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router, private filterService: FilterService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let parameters: Array<any> = [];
      this.query = queryParams.get('query');

      //Set the sort options
      this.sortOptions = [
        {
          name: 'Price: Low to High',
          value: 'price-asc'
        },
        {
          name: 'Price: High to Low',
          value: 'price-desc'
        }
      ];

      this.perPageOptions = [
        {
          name: '24',
          value: 24
        },
        {
          name: '48',
          value: 48
        },
        {
          name: '72',
          value: 72
        },
        {
          name: '96',
          value: 96
        },
        
      ];

      if (this.query) {
        this.sortOptions.unshift({
          name: 'Relevance',
          value: 'relevance'
        });
      }

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
        parameters.push({ key: 'limit', value: this.perPageOptions[0].value });
      }

      //Get the products
      this.dataService.get('api/Products', parameters)
        .subscribe((response: any) => {
          //Products per page
          let perPage = Number(queryParams.get('limit'));
          let productStart: number;
          let productEnd: number;
          let index = this.perPageOptions.findIndex(x => x.value === perPage);

          this.productsPerPage = this.perPageOptions[index == -1 ? 0 : index];

          //Sort
          index = this.sortOptions.findIndex(x => x.value === queryParams.get('sort'));
          this.selectedSortOption = this.sortOptions[index == -1 ? 0 : index];

          //Assign properties and variables
          let body = document.scrollingElement || document.documentElement;
          this.pageList = [];
          this.page = response.page;
          this.products = response.products;
          this.totalProducts = response.totalProducts;
          productStart = this.productsPerPage.value * (this.page - 1) + 1;
          productEnd = productStart + response.products.length - 1;
          this.results = 'Showing ' + productStart.toLocaleString('en') + '-' + productEnd.toLocaleString('en') + ' of ' + 
            this.totalProducts.toLocaleString('en');
          this.pages = Math.ceil(this.totalProducts / this.productsPerPage.value);
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

  trackProduct(index: number, product: any) {
    return product.id;
  }

  trackFilter(index: number, filter: any) {
    return filter.caption;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth > 970) this.showFilters = false;
  }
}