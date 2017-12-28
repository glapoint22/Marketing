import { Component, OnInit } from '@angular/core';
import { CheckboxFilterComponent } from '../checkbox-filter/checkbox-filter.component';
import { FilterService } from "./../filter.service";

@Component({
  selector: 'price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['../filter/filter.component.scss', './price-filter.component.scss']
})
export class PriceFilterComponent extends CheckboxFilterComponent implements OnInit {
  private min: string;
  private max: string;
  private showClearPrice: boolean;

  constructor(filterService: FilterService) { super(filterService); }

  onSubmit(priceForm) {
    //If price range is valid, set the filter
    if (priceForm.valid) {
      this.filterService.setFilter('Price', '[' + Math.min(Number(this.min), Number(this.max)) + '-' + Math.max(Number(this.min), Number(this.max)) + ']');
    }
  }

  ngOnInit() {
    let priceRange = this.getPriceRange();

    //If there is a custom price range, set the min and max properties
    if (priceRange) {
      this.min = priceRange.min;
      this.max = priceRange.max;
      this.showClearPrice = true;
    }
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

  clearPrice() {
    //Get the price range from the url
    let priceRange = this.getPriceRange();

    //If there is an custom price range, set the filter with the same price range and it will clear it from the url
    if (priceRange) {
      this.filterService.setFilter('Price', '[' + priceRange.min + '-' + priceRange.max + ']');
    }
  }
}
