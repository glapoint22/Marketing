import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public products;
  public totalProducts: number;
  public pages: number;
  public productStart: number;
  public productEnd: number;
  public query: string;
  public page: number;
  public pageList: Array<string> = [];

  public categories;
  // public displayAllCategories: boolean;
  // public currentCategory;
  // public queryParameters;
  

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let parameters: Array<any> = [];

      this.query = queryParams.get('query');
      // this.currentCategory = queryParams.get('category')
      
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

          // this.displayAllCategories = false;

          // //Get all the query parameters from the url
          // this.queryParameters = queryParams;

          // for(let i = 0; i < this.categories.length; i++){
          //   this.categories[i]['showAllNiches'] = false;
          // }

          this.categories = response.categories;
          


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

  
  
  
  
  // setCategory(id){
  //   let params = {};

  //   for (let i = 0; i < this.queryParameters.keys.length; i++) {
  //     if (this.queryParameters.keys[i] !== 'nicheId' && this.queryParameters.keys[i] !== 'page') {
  //       params[this.queryParameters.keys[i]] = this.queryParameters.params[this.queryParameters.keys[i]];
  //     }
  //   }

  //   params['category'] = id;

  //   this.router.navigate(['/search'], {
  //     queryParams: params
  //   });
  // }

  // setNiche(id, category, event){
  //   let params = {};
  //   event.stopPropagation();

  //   for (let i = 0; i < this.queryParameters.keys.length; i++) {
  //     if (this.queryParameters.keys[i] !== 'page') {
  //       params[this.queryParameters.keys[i]] = this.queryParameters.params[this.queryParameters.keys[i]];
  //     }
  //   }

  //   params['nicheId'] = id;
  //   params['category'] = category;

  //   this.router.navigate(['/search'], {
  //     queryParams: params
  //   });
  // }

  
}
