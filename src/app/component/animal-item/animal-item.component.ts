import {Component, Input} from '@angular/core';
import {RemoveAnimal, RenameAnimal} from "../../state/animal.actions";
import {Store} from "@ngxs/store";
import {AnimalModule} from "../../state/animal.state";

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss']
})
export class AnimalItemComponent {
  @Input() animal: AnimalModule;

  constructor(private readonly store: Store) {
  }

  removeAnimal() {
    this.store.dispatch(new RemoveAnimal(this.animal.id));
  }

  renameAnimal() {
    const requestName = String(prompt('new name', ''));
    this.store.dispatch(new RenameAnimal(this.animal.id, requestName));
  }
}
