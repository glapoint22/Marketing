import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.scss']
})
export class ArrowsComponent {
  @Input() showLeftArrow: boolean = true;
  @Input() showRightArrow: boolean = true;
  @Output() onArrowClick = new EventEmitter<number>();

  onClick(direction: number){
    this.onArrowClick.emit(direction);
  }
}
