import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";
import { FilterService } from "./../filter.service";
import { ShowModalService } from "../show-modal.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public totalProducts: number;
  public products;
  public pages: number;
  public productStart: number;
  public productEnd: number;
  public query: string;
  public page: number;
  public pageList: Array<string> = [];
  public categories;
  public filters;

  //Sort Options
  public selectedSortOption: any;
  public sortOptions = [];

  //Products per page
  public productsPerPage: number;
  public perPageOptions = [24, 48, 72, 96];

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router, private filterService: FilterService, private showModalService: ShowModalService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let parameters: Array<any> = [];
      this.query = queryParams.get('query');
      this.showModalService.showLoading(true);

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

      if (this.query) {
        this.sortOptions.unshift({
          name: 'Sort by Relevance',
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
        parameters.push({ key: 'limit', value: this.perPageOptions[0] });
      }

      //Get the products
      this.dataService.get('api/Products', parameters)
        .subscribe((response: any) => {
          //Products per page
          let perPage = Number(queryParams.get('limit'));
          this.productsPerPage = perPage === 0 ? this.perPageOptions[0] : perPage;

          //Sort
          let index = this.sortOptions.findIndex(x => x.value === queryParams.get('sort'));
          this.selectedSortOption = this.sortOptions[index == -1 ? 0 : index];

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
          this.showModalService.showLoading(false);
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
