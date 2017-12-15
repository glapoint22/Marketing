import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() caption: string;
  public queryParameters;
  public showContent: boolean = true;


  constructor(public route: ActivatedRoute, private router: Router) {
    route.queryParamMap.subscribe(queryParams => {
      //Get all the query parameters from the url
      this.queryParameters = queryParams;
    });
  }

  setQueryParameters(add, remove) {
    let params = {};

    //Remove the query parameters
    for (let i = 0; i < this.queryParameters.keys.length; i++) {
      if (remove.every(x => {
        return x !== this.queryParameters.keys[i];
      })) {
        params[this.queryParameters.keys[i]] = this.queryParameters.params[this.queryParameters.keys[i]];
      }
    }

    //Add the query parameters
    for (let i = 0; i < add.length; i++) {
      params[add[i].name] = add[i].value;
    }

    //Update the url
    this.router.navigate(['/search'], {
      queryParams: params
    });
  }

}
