import { Component, Input } from '@angular/core';
import { FilterService } from "./../filter.service";

@Component({
  selector: 'filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class FilterOptionsComponent {
  @Input() parent: any = {};
  @Input() options: Array<any> = [];

  constructor(public filterService: FilterService) {  }

  ngOnChanges() {
    let optionsArray = this.filterService.getOptionsFromQueryParams(this.parent.caption);

    //Check or uncheck the options
    for (let i = 0; i < this.options.length; i++) {
      this.options[i].checked = optionsArray.includes(this.options[i].name);
    }
  }
}