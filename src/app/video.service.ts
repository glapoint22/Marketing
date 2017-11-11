import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class VideoService {
  public currentVideo: SafeUrl;
  public videosCount: number;
  public title: string;
  public currentVideoIndex: number;
  public videos: Array<string>;
  public showPlayer = new Subject<boolean>();

  constructor(private sanitizer: DomSanitizer) {
    this.currentVideo = this.desanitize('');
  }

  open(videos, productName) {
    this.videos = videos;
    this.videosCount = this.videos.length;
    this.title = productName;
    this.setVideo(0);
    this.showPlayer.next(true);
  }

  close() {
    this.currentVideo = this.desanitize('');
    this.showPlayer.next(false);
  }

  setVideo(index: number) {
    this.currentVideoIndex = index;
    this.currentVideo = this.desanitize(this.videos[index]);
  }

  desanitize(string: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(string);
  }
}