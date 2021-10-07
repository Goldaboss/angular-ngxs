import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AddAnimals} from "./state/animal.actions";
import {AnimalState} from "./state/animal.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-ngxs';
  // @ts-ignore
  @Select(AnimalState) public arrAnimals$: Observable<string[]>;

  constructor(private readonly store: Store) {
    setInterval(() => this.addAnimal(`pisya ${(Math.random() * 10).toFixed()}`), 7000);
  }

  addAnimal(name: string) {
    this.store.dispatch(new AddAnimals(name))
  }
}


