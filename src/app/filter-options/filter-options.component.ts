import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class FilterOptionsComponent {
  @Input() parent: any = {};
}