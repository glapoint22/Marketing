import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() onShowSubscriptionForm = new EventEmitter<void>();
  public categories: Array<object> = [{ "name": "All Categories" }, { "name": "Books" }];
  public selectedCategory: Object = {};

  constructor(private dataService: DataService, private router: Router) { }
  
  stopPropagation(event): void {
    event.stopPropagation();
  }

  ngOnInit() {
    this.dataService.get('api/Categories')
    .subscribe((response: any) => {
      this.categories = response;
      // this.categories.unshift({name: 'All'});
      this.selectedCategory = this.categories[0];
    }, error => {
      this.dataService.data = error;
      this.router.navigate(['/error']);
    });
    
  }
}
