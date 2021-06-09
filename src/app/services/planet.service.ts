import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  private REST_API_SERVER = 'https://swapi.dev/api/planets/';

  constructor(private httpClient: HttpClient) {}

  public GetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
