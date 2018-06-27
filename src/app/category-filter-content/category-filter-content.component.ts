import { Component, Input } from '@angular/core';

@Component({
  selector: 'category-filter-content',
  templateUrl: './category-filter-content.component.html',
  styleUrls: ['../filter/filter.component.scss', '../category-filter/category-filter.component.scss']
})
export class CategoryFilterContentComponent {
  @Input() parent: any = {};

  getMaxHeight(category) {
    if(category.showAllNiches){
      return (category.niches.length + 2) * 18 + 10;
    }else{
      if(category.niches.length <= 4 ){
        return (category.niches.length + 1) * 18 + 10;
      }else{
        return 6 * 18 + 10;
      }
    }
  }
}