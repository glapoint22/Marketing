import { Component, Input } from '@angular/core';

@Component({
  selector: 'price-filter-content',
  templateUrl: './price-filter-content.component.html',
  styleUrls: ['../filter/filter.component.scss', '../price-filter/price-filter.component.scss']
})
export class PriceFilterContentComponent {
  @Input() parent: any = {};
}