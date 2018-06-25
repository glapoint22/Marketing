import { Component, Input } from '@angular/core';

@Component({
  selector: 'checkbox-filter-content',
  templateUrl: './checkbox-filter-content.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class CheckboxFilterContentComponent {
  @Input() parent: any = {};
}