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

  onSubmit(priceForm){
    if(priceForm.valid){
      this.filterService.setFilter('Price', '[' + Math.min(Number(this.min), Number(this.max)) + '-' + Math.max(Number(this.min), Number(this.max)) + ']');
    }
  }

  ngOnInit(){
    let optionsArray = this.getOptionsFromQueryParams();

    for(let i = 0; i < optionsArray.length; i++){
      let regEx = new RegExp(/\[(\d+\.?(?:\d+)?)-(\d+\.?(?:\d+)?)\]/, 'g');

      let result = regEx.exec(optionsArray[i]);
      if(result){
        this.min = result[1];
        this.max = result[2];
        this.showClearPrice = true;
      }
    }
  }

  clearPrice(){
    console.log('Hello');
  }
}
