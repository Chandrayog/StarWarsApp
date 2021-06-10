import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private REST_API = 'https://swapi.dev/api/people/';

  constructor(private httpClient: HttpClient) {}

  // function for error handling
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  // function for get request to get people
  public GetRequest() {
    return this.httpClient
      .get(this.REST_API, { observe: 'response' })
      .pipe(retry(3), catchError(this.handleError));
  }
  //function for get people details with ID
  public GetRequestwithID(personID: string) {
    return this.httpClient
      .get(this.REST_API + personID, { observe: 'response' })
      .pipe(retry(3), catchError(this.handleError));
  }
}
