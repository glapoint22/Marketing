import { Component, Input } from '@angular/core';
import { FilterService } from "./../filter.service";

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() caption: string;
  public showContent: boolean = true;

  constructor(public filterService: FilterService) {}
}
