import { Component } from '@angular/core';
import { CheckboxFilterComponent } from '../checkbox-filter/checkbox-filter.component';
import { FilterService } from "./../filter.service";

@Component({
  selector: 'price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['../filter/filter.component.scss', './price-filter.component.scss']
})
export class PriceFilterComponent extends CheckboxFilterComponent {
  constructor(filterService: FilterService) { super(filterService); }
}
