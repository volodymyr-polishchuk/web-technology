import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Web Technology';
  currentUrl: string;
  private lang = 0;

  constructor(private translateService: TranslateService,
              private router: Router) {}

  ngOnInit(): void {
    this.translateService.use(environment.locales[1]);
    this.router.events.pipe(
      filter(value => value instanceof NavigationEnd)
    ).subscribe((value: any) => {
      this.currentUrl = value.url;
    });
  }

  selectNextLang() {
    this.translateService.use(environment.locales[this.lang++ % 2]);
  }
}
