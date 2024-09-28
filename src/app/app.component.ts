import { Component, OnInit } from '@angular/core';
import { SocketService } from './shared/services/socket.service';
import { CurrencyRate } from './shared/services/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'currency-quotes-frontend';

  constructor(private socket: SocketService) {}

  ngOnInit(): void {
    this.socket.getMessage().subscribe((data: CurrencyRate[]) => {
      console.log(data);
    });
  }
}
