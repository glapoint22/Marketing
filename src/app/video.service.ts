import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Injectable()
export class VideoService {
  public display: string = 'none';
  public currentVideo: SafeUrl;
  public videosCount: number;
  public title: string;
  public currentVideoIndex: number;
  public videos: Array<string>;

  constructor(private sanitizer: DomSanitizer) {
    this.currentVideo = this.desanitize('');
  }

  open(videos, productTitle){
    this.videos = videos;
    this.display = 'block';
    this.videosCount = this.videos.length;
    this.title = productTitle;
    this.setVideo(0);
  }

  close(){
    this.display = 'none';
    this.currentVideo = this.desanitize('');
  }

  setVideo(index: number){
    this.currentVideoIndex = index;
    this.currentVideo = this.desanitize(this.videos[index]);
  }

  desanitize(string: string): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(string);
  }
}