import { Component, Input } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { FilterService } from "./../filter.service";

@Component({
  selector: 'checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['../filter/filter.component.scss', './checkbox-filter.component.scss']
})
export class CheckboxFilterComponent extends FilterComponent {
  @Input() options: Array<any> = [];

  constructor(filterService: FilterService) { super(filterService); }

  ngOnChanges() {
    //Get the list of filters
    let filterString = this.filterService.queryParams.params['filter'];

    //If there are any filters
    if (filterString) {
      //See if the current filter is in the list
      let filter = this.filterService.getFilter(this.caption);

      //If the current filter is in the list
      if (filter) {
        let filterArray = filter[2].split('~');

        //Check or uncheck the options
        for (let i = 0; i < this.options.length; i++) {
          this.options[i].checked = filterArray.includes(this.options[i].name);
        }
      }
    }
  }
}
