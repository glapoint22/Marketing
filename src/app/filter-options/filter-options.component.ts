import { Component, Input } from '@angular/core';
import { FilterService } from "./../filter.service";

@Component({
  template: '',
})
export class FilterOptionsComponent {
  @Input() parent: any = {};
  @Input() options: Array<any> = [];

  constructor(public filterService: FilterService) { }
}