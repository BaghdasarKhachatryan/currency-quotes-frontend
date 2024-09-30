import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { CurrencyRate } from '../model';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  public getMessage(): Observable<CurrencyRate[]> {
    return this.socket
      .fromEvent<CurrencyRate[]>('currencyRates')
      .pipe(throttleTime(500));
  }

  public connectSocket() {
    this.socket.connect();
  }

  public disconnectSocket() {
    this.socket.disconnect();
  }
}
