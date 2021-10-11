import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent {

  @Output() public onAddAnimal: EventEmitter<string> = new EventEmitter<string>();

  public animal = '';

  constructor() {
  }

  addAnimal() {
    if (this.animal.trim()) {
      const animal: string = this.animal
      this.onAddAnimal.emit(animal)
      this.animal = '';
    }
  }
}
