import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

class Employee {
  idEmployee: string;
  nameEmployee: string;
  addressEmployee: string;
  phoneNumberEmployee: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json'
    })
  };

  /*Empleado*/
  updateE(employee: Employee): Observable<Employee> {
    // tslint:disable-next-line:max-line-length
    return this.http.put<Employee>(this.apiURL + '/employees', employee, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  deleteE(id) {
    return this.http.delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  createE(employee: Employee): Observable<Employee> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<Employee>(this.apiURL + '/employees', employee, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  getAllE() {
    return this.http.get<Employee>(this.apiURL + '/employees', this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage;

    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log( 'Algo ha salido mal, por favor intentalo más tarde');

    return throwError(errorMessage);
  }

  get(id): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employees/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
}
