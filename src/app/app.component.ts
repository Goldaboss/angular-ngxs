import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AddAnimals} from "./state/animal.actions";
import {AnimalState, AnimalStateModel} from "./state/animal.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-ngxs';

  @Select(AnimalState.animalsStateData) public objAnimals$: Observable<AnimalStateModel>;

  @Select(AnimalState.animals) public arrAnimals$: Observable<string[]>;

  constructor(private readonly store: Store) {
  }

  addAnimal(name: string) {
    this.store.dispatch(new AddAnimals(name))
  }
}


