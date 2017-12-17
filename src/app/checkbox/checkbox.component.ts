import { Component, Input } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() label: string;
  @Input() checked: boolean;
  @Input() disabled: boolean;

  constructor() { }
}
