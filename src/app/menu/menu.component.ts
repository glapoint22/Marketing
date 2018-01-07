import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public showMenu: boolean;
  public showNicheList: boolean;
  @Input() categories: any;
  public currentCategory: any;

  constructor(private router: Router) { }

  onNicheClick(niche){
    this.showMenu = false;
    this.showNicheList = false;
    this.router.navigate(['/search'], {
      queryParams: { 'category': this.currentCategory.id, 'nicheId': niche.id }
    });
  }
}
