import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ICardProduct } from 'src/types';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  apiURL = 'http://localhost:8000';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getAllProduct(): Observable<Array<ICardProduct>> {
    return this.http
      .get<Array<ICardProduct>>(`${this.apiURL}/products`)
      .pipe(retry(1), catchError(this.handleError));
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
