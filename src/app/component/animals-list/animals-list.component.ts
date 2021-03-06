import {Component, Input} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {AnimalModel, AnimalState, AnimalStateModel} from "../../state/animal.state";

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent {

  @Select(AnimalState.animalsStateData) public objAnimals$: Observable<AnimalStateModel>;

  @Select(AnimalState.animals) public arrAnimals$: Observable<AnimalModel[]>

  @Select(AnimalState.animalsCount) public animalsCount$: Observable<number>;
}
