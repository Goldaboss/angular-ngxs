import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Store} from "@ngxs/store";
import {AnimalModel} from "../../state/animal.state";
import {RenameAnimal} from "../../state/animal.actions";


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogOverviewExampleDialog {

  newAnimal: string;

  constructor(private readonly store: Store, @Inject(MAT_DIALOG_DATA) public data: AnimalModel) {
  }

  renameAnimal() {
    this.store.dispatch(new RenameAnimal(this.data.id, this.newAnimal));
  }

}
