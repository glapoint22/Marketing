import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() pages: Array<any> = [];
  @Input() currentPage: number;
  @Input() showPlay: boolean;
  @Input() play: boolean;
  @Output() onPaginatorClick = new EventEmitter<number>();
  @Output() onPlayClick = new EventEmitter<void>();

  onPaginatorButtonClick(page: number) {
    this.onPaginatorClick.emit(page);
  }
  onPlayButtonClick() {
    this.onPlayClick.emit();
  }
}