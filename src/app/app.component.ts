import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  config: AppConfig;

  constructor(readonly configService: ConfigService) {
    this.config = configService.get();
  }
}
