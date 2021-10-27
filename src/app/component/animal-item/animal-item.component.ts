import {Component, Input} from '@angular/core';
import {RemoveAnimal} from "../../state/animal.actions";
import {Store} from "@ngxs/store";
import {AnimalModel} from "../../state/animal.state";
import {MatDialog} from "@angular/material/dialog";
import {DialogOverviewExampleDialog} from "../dialog/dialog.component";

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss']
})
export class AnimalItemComponent {
  @Input() animal: AnimalModel;

  constructor(private readonly store: Store, public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(DialogOverviewExampleDialog, {
      data: this.animal
    });
  }

  removeAnimal() {
    this.store.dispatch(new RemoveAnimal(this.animal.id));
  }
}
