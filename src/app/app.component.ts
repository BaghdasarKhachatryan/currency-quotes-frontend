import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SocketService } from './shared/services/socket.service';
import { CurrencyRate } from './shared/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
