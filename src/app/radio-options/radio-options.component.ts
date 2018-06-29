import { Component, Input } from '@angular/core';

@Component({
  selector: 'radio-options',
  templateUrl: './radio-options.component.html',
  styleUrls: ['../filter/filter.component.scss']
})
export class RadioOptionsComponent {
  @Input() options: Array<any> = [];
  @Input() parent: any = {};
  @Input() selectedOption: any = {};
}
