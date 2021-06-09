import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private REST_API_SERVER = 'https://swapi.dev/api/films/';

  constructor(private httpClient: HttpClient) {}

  public GetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
