import { Component, OnInit } from '@angular/core';
import {Select} from "@ngxs/store";
import {AnimalState} from "../../state/animal.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @ts-ignore
  @Select(AnimalState) public arrAnimals$: Observable<string[]>;
}
