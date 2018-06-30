import { Component, Input } from '@angular/core';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';

@Component({
  selector: 'radio-filter-options',
  templateUrl: './radio-filter-options.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class RadioFilterOptionsComponent extends FilterOptionsComponent {
  @Input() selectedOption: any = {};
  @Input() paramName: string = '';
}