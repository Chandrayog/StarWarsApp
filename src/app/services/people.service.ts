import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private REST_API_SERVER = 'https://swapi.dev/api/people/';

  constructor(private httpClient: HttpClient) {}

  public GetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public GetRequestwithID(personID: string) {
    return this.httpClient.get(this.REST_API_SERVER + personID);
  }
}
