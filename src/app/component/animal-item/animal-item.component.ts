import {Component, Input} from '@angular/core';
import {RemoveAnimal} from "../../state/animal.actions";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss']
})
export class AnimalItemComponent {
  @Input() animal: string;
  @Input() id: number;

  constructor(private readonly store: Store) {
  }

  removeAnimal() {
    this.store.dispatch(new RemoveAnimal(this.id));
  }
}
