import { Component, Input } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() label: any;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  
  constructor() { }
}
