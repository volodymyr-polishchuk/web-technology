import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Web Technology';
  private lang = 0;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.use(environment.locales[1]);
  }

  selectNextLang() {
    this.translateService.use(environment.locales[this.lang++ % 2]);
  }
}
