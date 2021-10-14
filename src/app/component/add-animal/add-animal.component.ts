import {Component, EventEmitter, Output} from '@angular/core';
import {Store} from "@ngxs/store";
import {AddAnimals} from "../../state/animal.actions";

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent {

  public animal = '';

  constructor(private readonly store: Store) {
  }

  addAnimal() {
    if (this.animal.trim()) {
      this.store.dispatch(new AddAnimals(this.animal))
    }
    this.animal = '';
  }
}
