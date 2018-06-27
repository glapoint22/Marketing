import { Component, Input } from '@angular/core';
import { FilterService } from "./../filter.service";

@Component({
  template: ''
})
export class FilterComponent {
  @Input() caption: string;
  public showContent: boolean;
  public show: boolean;

  constructor(public filterService: FilterService) { }

  onArrowClick() {
    if (!this.show) {
      this.show = true;
      window.setTimeout(() => {
        this.showContent = true;
      }, 1);
    } else {
      this.showContent = false;
    }
  }

  onTransitionEnd() {
    if (!this.showContent) this.show = false;
  }
}