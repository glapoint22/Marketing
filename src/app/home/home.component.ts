import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onClick(){
    let notification = {
      "notification": "l7w11xXKmyK4sP87unJCwYmn+tskGalj5Y4XAcr9Rpxx85N6m1wWdGyJkN4tigf1aMauZ8hHUeDJgW+BdsYdQ8Zdl4BIQRI1mphs29fWNw+P2tiIMBR5hXJeGDMvRwa6yNezQd4Niwde8v6QTlUvr2plbwAZ1N9w2VCIYGJoHbZQrGumFegj96WUtkdcFLXUon60+uohpqtX3wNtCEbEDY9BMZugoHSi5SdTce4X65qs1eJnz6wb28TIzjFd3seLGXFJszhD80zG7BQfjP1PL06mYNDOYX+It+Nd/dm+ygMvVtDUQKrHGnOB330EqtRl+9G0n8iJ6Zp9vAmsS7PpyXTd5jndvDqn1txhN2cGwg2zH725II2ZBSg1gqagT9WevguuWPM21Ta501SFD0mFOKpqkiBsGAPbScywMMDC1DgY3xEbT8NS0RcBs+4WN39VzH6seNqttm9EIhbN8qJFin/z6CCMicNWq/E/cLa3dWnaA9nLszj0xxB+eETIXRk/ENWaQRcNo9/oZ6Q56q5Y2lap1pYv5xkjztus+tymgI48qTBDJ8sMeuPv0c900iw2f8xAc8+o5fBMxDya+x6zzHMIIzDejZPUJelcAGbh5XEq2oGMPSL2x0w1ztozWSzmvGbruj4N+z1F8jRjms7afdBiYte6/vXUBm0PK3MaXLUANE8EsSh48qoh2bnVh7BYcDHK3LGUtS8GTqpSYiOLEM/2cnjvMB6V8BUe3XCgUFRXX/oYQmb1/Hx523SA9S2g05Op4uKIZQScsTzPX5r5EUNsiuOjmn8K1vE9NQOPzqfdplHwuR0vOO5AraWgVTAxlwndUqHyC/VpL/8OPEu22BKSWNVHFhWwGPFkhIW5geMhdYH8+mdjR/T2EQ0sAMZT0w0Ofyvfq8wL8eKy+vLwif+mQpR25LJK73TdoWJew2DD1YA4BO399rzKkPx4z7GR",  
      "iv": "QzRERjI5NTYwNDFDOTYwQg=="
    }
    this.dataService.post('api/Notifications', notification)
      .subscribe((response: any) => {
        response;
     });
  }
}
