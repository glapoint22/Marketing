import { Component, OnInit } from '@angular/core';
import { WindowService } from "../window.service";

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    
  }

  stopPropagation(event){
    event.stopPropagation();
  }
}
