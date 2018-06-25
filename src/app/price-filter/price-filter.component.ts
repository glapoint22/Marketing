import { Component, OnInit } from '@angular/core';
import { CheckboxFilterComponent } from '../checkbox-filter/checkbox-filter.component';
import { FilterService } from "./../filter.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'price-filter',
  templateUrl: '../filter/filter.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class PriceFilterComponent extends CheckboxFilterComponent implements OnInit {
  public min: string;
  public max: string;
  public showClearPrice: boolean;

  constructor(filterService: FilterService, private route: ActivatedRoute) { super(filterService); }

  onSubmit(priceForm) {
    //If price range is valid, set the filter
    if (priceForm.valid) {
      this.filterService.setFilter('Price', '[' + Math.min(Number(this.min), Number(this.max)) + '-' + Math.max(Number(this.min), Number(this.max)) + ']');
      priceForm.submitted = false;
    } else {
      if (priceForm.form.controls.min.value || priceForm.form.controls.max.value) this.showClearPrice = true;
    }
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      let priceRange = this.getPriceRange();

      //If there is a custom price range, set the min and max properties
      if (priceRange) {
        this.min = priceRange.min;
        this.max = priceRange.max;
        this.showClearPrice = true;
      }
    });
  }

  getPriceRange() {
    let priceRange: any, optionsArray = this.getOptionsFromQueryParams(), regEx = new RegExp(/\[(\d+\.?(?:\d+)?)-(\d+\.?(?:\d+)?)\]/, 'g');

    //Iterate through all the options
    for (let i = 0; i < optionsArray.length; i++) {
      let result = regEx.exec(optionsArray[i]);

      //If result contains a custom price range, set the min and max to the price range object
      if (result) {
        priceRange = {};
        priceRange['min'] = result[1];
        priceRange['max'] = result[2];
      }
    }
    return priceRange;
  }

  clearPrice(priceForm) {
    //Get the price range from the url
    let priceRange = this.getPriceRange();

    this.min = undefined;
    this.max = undefined;
    this.showClearPrice = false;
    priceForm.submitted = false;

    //If there is an custom price range, set the filter with the same price range and it will clear it from the url
    if (priceRange) {
      this.filterService.setFilter('Price', '[' + priceRange.min + '-' + priceRange.max + ']');
    }
  }
}