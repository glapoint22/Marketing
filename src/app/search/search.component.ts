import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private products;
  private totalProducts: number;
  private pages: number;
  private productStart: number;
  private productEnd: number;
  private query: string;
  private page: number;
  private pageList: Array<string> = [];
  private categories;
  private filters;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let parameters: Array<any> = [];

      this.query = queryParams.get('query');
      
      for (let i = 0; i < queryParams.keys.length; i++) {
        parameters.push({ key: queryParams.keys[i], value: queryParams.get(queryParams.keys[i]) })
      }

      this.dataService.get('api/Products', parameters)
        .subscribe((response: any) => {
          let resultsPerPage = response.resultsPerPage, body = document.scrollingElement || document.documentElement;
          body.scrollTop = 0;
          this.pageList = [];
          this.page = response.page;
          this.products = response.products;
          this.totalProducts = response.totalProducts;
          this.productStart = resultsPerPage * (this.page - 1) + 1;
          this.productEnd = this.productStart + response.products.length - 1;
          this.pages = Math.ceil(this.totalProducts / resultsPerPage);
          this.categories = response.categories;
          this.filters = response.filters;


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
      queryParams: {'page': page},
      queryParamsHandling: 'merge'
    });
  }

  trackById(index: number, product: any){
    return product.id;
  }
}
