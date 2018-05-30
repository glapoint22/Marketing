import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class VideoService {
  public currentVideo: SafeUrl;
  public videosCount: number;
  public title: string;
  public currentVideoIndex: number;
  public videos: Array<string>;
  public showPlayer: boolean;

  constructor(private sanitizer: DomSanitizer) {
    this.currentVideo = this.desanitize('');
  }

  open(videos, productName) {
    this.videos = videos;
    this.videosCount = this.videos.length;
    this.title = productName;
    this.setVideo(0);
    this.showPlayer = true;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.currentVideo = this.desanitize('');
    this.showPlayer = false;
    document.body.style.overflow = 'visible';
  }

  setVideo(index: number) {
    this.currentVideoIndex = index;
    this.currentVideo = this.desanitize(this.videos[index]);
  }

  desanitize(string: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(string);
  }
}