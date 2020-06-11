import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { PersonalQualitiesComponent } from './pages/personal-qualities/personal-qualities.component';
import { ProfessionalSkillsAndAbilitiesComponent } from './pages/professional-skills-and-abilities/professional-skills-and-abilities.component';
import { PlansForTheFutureComponent } from './pages/plans-for-the-future/plans-for-the-future.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalQualitiesComponent,
    ProfessionalSkillsAndAbilitiesComponent,
    PlansForTheFutureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
