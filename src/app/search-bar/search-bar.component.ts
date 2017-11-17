import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() onShowSubscriptionForm = new EventEmitter<void>();
  public categories: Array<object> = [{ "name": "All Categories", "value": "All" }, { "name": "Books", "value": "Books" }];
  public selectedCategory: Object = {};

  constructor() { }
  
  stopPropagation(event): void {
    event.stopPropagation();
  }

  ngOnInit() {
    this.selectedCategory = this.categories[0];
  }
}
