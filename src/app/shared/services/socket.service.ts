import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrencyRate } from './model';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  getMessage(): Observable<CurrencyRate[]> {
    return this.socket.fromEvent('currencyRates');
  }
}
