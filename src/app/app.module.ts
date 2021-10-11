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
import {AddAnimalComponent} from "./component/add-animal/add-animal.component";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,
    AnimalItemComponent,
    AddAnimalComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AnimalState], {
      developmentMode: !environment.production
    }),
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
