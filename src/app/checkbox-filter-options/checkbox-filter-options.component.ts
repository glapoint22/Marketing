import { Component, OnChanges } from '@angular/core';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';

@Component({
  selector: 'checkbox-filter-options',
  templateUrl: './checkbox-filter-options.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class CheckboxFilterOptionsComponent extends FilterOptionsComponent implements OnChanges {
  ngOnChanges() {
    let optionsArray = this.filterService.getOptionsFromQueryParams(this.parent.caption);

    //Check or uncheck the options
    for (let i = 0; i < this.options.length; i++) {
      this.options[i].checked = optionsArray.includes(this.options[i].name);
    }
  }
}