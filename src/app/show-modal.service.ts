import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowModalService {
  public videoPlayer = new Subject<any>();
  public subscriptionForm = new Subject<any>();
  public loading = new Subject<boolean>();
  public error = new Subject<any>();

  showVideoPlayer(videos, productName) {
    this.videoPlayer.next({
      videos: videos,
      productName: productName
    });
  }

  showSubscriptionForm(data) {
    this.subscriptionForm.next(data);
  }

  showLoading(show) {
    this.loading.next(show);
  }

  showError(error) {
    this.error.next(error);
  }
}