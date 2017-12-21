import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class FilterService {
  private filterString: string;
  public queryParams;

  constructor(private route: ActivatedRoute, private router: Router) {
    route.queryParamMap.subscribe(queryParams => {
      this.filterString = queryParams.get('filter');
      this.queryParams = queryParams;
    });
  }

  setFilter(filter: string, option: string) {
    let result, startString, midString, endString, index;

    //If there are any filters
    if (this.filterString) {
      //Search for the filter in the string
      result = this.getFilter(filter);

      //If the filter was found within the filter string
      if (result) {
        /* Split the filter string into 3 sections. The first two sections are the
        start and end of the filter string. */
        startString = this.filterString.slice(0, result.index) + result[1];
        endString = this.filterString.slice(result.index + result[0].length);

        //Get the index of the option passed in
        index = result[2].indexOf(option);

        //If the option is not found, add it to the mid string
        if (index === -1) {
          midString = result[2] + ',' + option;
        } else {
          //The option was found, so remove it from the string
          let array = result[2].split(',');
          index = array.indexOf(option);

          if (index > -1) {
            array.splice(index, 1);
          }

          midString = array.join();
        }

        //Combine all three strings together
        this.filterString = startString + midString + endString;

        //If the midstring is empty, this means there are no more options in this filter.
        //Remove this filter from the filter string
        if (midString === '') {
          this.filterString = this.filterString.replace(filter + '||', '');
        }
      } else {
        //The filter was not found within the filter string so we add it here
        this.filterString += filter + '|' + option + '|';
      }
    } else {
      //There are no filters in the filter string, so add the first one here
      this.filterString = filter + '|' + option + '|';
    }


    //Set the query params
    if (this.filterString === '') {
      this.setQueryParameters([], ['page', 'filter']);
    } else {
      this.setQueryParameters([{name: 'filter', value: this.filterString}], ['page']);
    }
  }



  setQueryParameters(add, remove) {
    let params = {};

    //Remove the query parameters
    for (let i = 0; i < this.queryParams.keys.length; i++) {
      if (remove.every(x => {
        return x !== this.queryParams.keys[i];
      })) {
        params[this.queryParams.keys[i]] = this.queryParams.params[this.queryParams.keys[i]];
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

  getFilter(filter: string){
    let regEx = new RegExp('(' + filter + '\\|)([a-zA-Z0-9`~!@#$%^&*()\-_+={[}\\]\\:;"\'<,>.?/\\s]+)', 'g');
    return regEx.exec(this.filterString);
  }
}
