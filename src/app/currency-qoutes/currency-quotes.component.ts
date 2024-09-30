import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CurrencyRate } from '../shared/model';
import { SocketService } from '../shared/services/socket.service';
import { FormControl, Validators } from '@angular/forms';
import { RestApiService } from '../shared/services/rest-api.service';
import { pipe, Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-currency-quotes',
  templateUrl: './currency-quotes.component.html',
  styleUrls: ['./currency-quotes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyQuotesComponent implements OnInit, OnDestroy {
  private _complete$: Subject<void> = new Subject();

  public dataSource = new MatTableDataSource<CurrencyRate>();

  public displayedColumnsView = ['time', 'symbol', 'ask', 'bid'];

  public frequency = new FormControl(null, [
    Validators.min(50),
    Validators.max(1000),
  ]);

  constructor(
    private socketService: SocketService,
    private restApi: RestApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.socketService.connectSocket();
    this.socketService.getMessage().subscribe((data: CurrencyRate[]) => {
      this.dataSource.data = [...data];
    });
  }

  public stopSendingData() {
    this.restApi
      .stopStartSendingData('stop')
      .pipe(takeUntil(this._complete$))
      .subscribe((message: string) => {
        this.snackBar.open(message, '', { duration: 1000 });
      });
  }
  public startSendingData() {
    this.restApi
      .stopStartSendingData('start')
      .pipe(takeUntil(this._complete$))
      .subscribe((message: string) => {
        this.snackBar.open(message, '', { duration: 1000 });
      });
  }

  public onFrequencyValueSubmit(event: Event) {
    let interval = this.frequency.value!;
    this.restApi
      .setIntervalTimeout(interval)
      .pipe(takeUntil(this._complete$))
      .subscribe(
        (message: string) => {
          this.snackBar.open(message, '', { duration: 1000 });
          this.frequency.setValue(null);
        },
        (error: Error) => {
          console.log(error);
        }
      );
  }

  ngOnDestroy(): void {
    this.restApi
      .stopStartSendingData('stop')
      .pipe(takeUntil(this._complete$))
      .subscribe((message: string) => {
        this.socketService.disconnectSocket();

        this._complete$.next();
        this._complete$.complete();
      });
  }
}
