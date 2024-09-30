import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public setIntervalTimeout(timeout: number): Observable<string> {
    let data = {
      timeout,
    };

    return this.http
      .post<{ message: string }>(`${this.apiUrl}/setIntervalTimeout`, data)
      .pipe(map((data: { message: string }) => data.message));
  }

  public stopStartSendingData(command: string): Observable<string> {
    let data = {
      command,
    };

    return this.http
      .post<{ message: string }>(`${this.apiUrl}/stopStartSendingData`, data)
      .pipe(map((data: { message: string }) => data.message));
  }
}
