import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss']
})
export class CheckboxFilterComponent extends FilterComponent implements OnInit {
  public options: Array<any> = [];
  public modifiedCaption: string;
  
  
  @Input()
  set optionsList(options: string) {
    let listArray = options.split(',');
    for (let i = 0; i < listArray.length; i++) {
      this.options.push({
        name: listArray[i],
        checked: false
      })
    }
  }



  public selectedOptions: Array<string> = [];
  // public queryParameters;

  constructor(route: ActivatedRoute, router: Router) {super(route, router); }

  ngOnInit() {
    this.modifiedCaption = this.caption.substr(0, 1).toLowerCase() + this.caption.substr(1).replace(/\s/g, "");

    this.route.queryParamMap.subscribe(queryParams => {
      let params = queryParams.get(this.modifiedCaption);

      //Get all the query parameters from the url
      // this.queryParameters = queryParams;

      //Split all the params into the selected options array
      if (params) {
        this.selectedOptions = params.split(',');
      } else {
        this.selectedOptions = [];
      }

      //Check or uncheck the options
      for (let i = 0; i < this.options.length; i++) {
        if (params && params.indexOf(this.options[i].name) !== -1) {
          this.options[i].checked = true;
        } else {
          this.options[i].checked = false;
        }
      }
    }, error => {
      // this.dataService.data = error;
      // this.router.navigate(['/error']);
    });
  }

  setFilter(option) {
    let queryString, index = this.selectedOptions.indexOf(option), params = {};

    //Add or remove the passed in option from the selected options array
    if (index === -1) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.splice(index, 1);
    }

    //If there are selected options
    if (this.selectedOptions.length > 0) {
      this.setQueryParameters([{name: this.modifiedCaption, value: this.selectedOptions.join()}], ['page']);
      
      
      
      
      
      
      
      
      
      
      // //Add all the existing query parameters to the params object except for "page"
      // for (let i = 0; i < this.queryParameters.keys.length; i++) {
      //   if (this.queryParameters.keys[i] !== 'page') {
      //     params[this.queryParameters.keys[i]] = this.queryParameters.params[this.queryParameters.keys[i]];
      //   }
      // }
      // //Add the selected options to the params object
      // queryString = this.selectedOptions.join();
      // params[this.modifiedCaption] = queryString;

      //No selected options
    } else {
      this.setQueryParameters([], [this.modifiedCaption, 'page']);
      
      
      
      
      //Remove the selected options from the params object
      // for (let i = 0; i < this.queryParameters.keys.length; i++) {
      //   if (this.queryParameters.keys[i] !== this.modifiedCaption && this.queryParameters.keys[i] !== 'page') {
      //     params[this.queryParameters.keys[i]] = this.queryParameters.params[this.queryParameters.keys[i]];
      //   }
      // }
    }
    // this.router.navigate(['/search'], { queryParams: params });
  }
}
