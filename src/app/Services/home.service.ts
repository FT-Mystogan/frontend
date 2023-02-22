import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class HomeService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };
  private REST_API_SERVER = 'http://localhost:8080/api';
  constructor(private httpClient: HttpClient) { }

  public generate(): Observable<any> {
    const url = `${this.REST_API_SERVER}/generate`;
    return this.httpClient.get<any>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  public sort(key: number, firstArray: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/sort/${key}`;
    return this.httpClient.post<any>(url, firstArray, this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
