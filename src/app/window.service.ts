import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Injectable()
export class WindowService {
  public display: string = 'none';
  public currentUrl: SafeUrl;
  public urlsCount: number;
  public title: string;
  public currentIndex: number;
  private urls: Array<string>;

  constructor(private sanitizer: DomSanitizer) {
    this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  open(videos, productTitle){
    this.urls = videos;
    this.display = 'block';
    this.currentIndex = 0;
    this.urlsCount = this.urls.length;
    this.title = productTitle;
    this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urls[this.currentIndex]);
  }

  close(){
    this.display = 'none';
    this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  showNextVideo(direction: number){
    this.currentIndex += direction;
    this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urls[this.currentIndex]);
  }

}
