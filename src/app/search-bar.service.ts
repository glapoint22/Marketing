import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  public searchBar = {
    categories: [],
    searchCategories: [],
    selectedCategory: {} as any,
    featuredCategories: []
  }

  constructor() { }
}