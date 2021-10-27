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
import {DialogOverviewExampleDialog} from './component/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,
    AnimalItemComponent,
    AddAnimalComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AnimalState], {
      developmentMode: !environment.production
    }),
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
