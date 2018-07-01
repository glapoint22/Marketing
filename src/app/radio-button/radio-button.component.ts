import { Component } from '@angular/core';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'radio-button',
  templateUrl: '../custom-input/custom-input.component.html',
  styleUrls: ['../custom-input/custom-input.component.scss', './radio-button.component.scss']
})
export class RadioButtonComponent extends CustomInputComponent {}