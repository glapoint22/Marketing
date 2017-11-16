import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public categories: Array<object> = [{ "name": "All Categories", "value": "All" }, { "name": "Books", "value": "Books" }];
  public selectedCategory: Object = {};

  constructor() { }
  public foo: boolean = false;

  ngOnInit() {
    this.selectedCategory = this.categories[0];
  }
}
