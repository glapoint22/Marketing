import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  @Input() height: string = '100%';
  constructor() { }

  ngOnInit() {
  }

}
