import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class ConfigService {
  private config!: AppConfig;

  constructor(private readonly httpClient: HttpClient) {}

  load() {
    return this.httpClient
      .get('/assets/config.json')
      .pipe(map((res) => (this.config = res as AppConfig)));
  }

  get() {
    return this.config;
  }
}
