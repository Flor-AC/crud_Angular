import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

class Department {
  idDepartment: string;
  nameDepartment: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json'
    })
  };

  /*Departamento*/
  update(department: Department): Observable<Department> {
    // tslint:disable-next-line:max-line-length
    return this.http.put<Department>(this.apiURL + '/departments', department, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete<Department>(this.apiURL + '/departments/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  create(department: Department): Observable<Department> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<Department>(this.apiURL + '/departments', department, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  getAll() {
    return this.http.get<Department>(this.apiURL + '/departments', this.httpOptions).pipe(retry(1), catchError(this.handleError));
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

  get(id): Observable<Department> {
    return this.http.get<Department>(this.apiURL + '/departments/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }
}
