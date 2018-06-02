import { Component, OnInit } from '@angular/core';
import { ShowModalService } from "../show-modal.service";
import { ModalComponent } from '../modal/modal.component';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss', '../modal/modal.component.scss']
})
export class VideoPlayerComponent extends ModalComponent implements OnInit {
  public currentVideo: SafeUrl;
  public videosCount: number;
  public title: string;
  public currentVideoIndex: number;
  public videos: Array<string>;

  constructor(private showModalService: ShowModalService, private sanitizer: DomSanitizer) { super(); }

  ngOnInit() {
    this.currentVideo = this.desanitize('');
    this.observable = this.showModalService.videoPlayer;
    super.ngOnInit();
  }

  showNextVideo(direction: number) {
    this.setVideo(this.currentVideoIndex + direction);
  }

  showVideo(index: number) {
    this.setVideo(index);
  }

  open(data: any) {
    this.videos = data.videos;
    this.videosCount = this.videos.length;
    this.title = data.productName;
    this.setVideo(0);
    super.open();
  }

  close() {
    this.currentVideo = this.desanitize('');
    super.close();
  }

  setVideo(index: number) {
    this.currentVideoIndex = index;
    this.currentVideo = this.desanitize(this.videos[index]);
  }

  desanitize(string: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(string);
  }
}