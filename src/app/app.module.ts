import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import {AnimalState} from "./state/animal.state";
import {AnimalsListComponent} from './component/animals-list/animals-list.component';
import {AnimalItemComponent} from './component/animal-item/animal-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,
    AnimalItemComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AnimalState], {
      developmentMode: !environment.production
    }),
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
