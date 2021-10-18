import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AddAnimals, RemoveAnimal} from "./animal.actions";

export interface AnimalStateModel {
  animals: AnimalModule[];
  count: number;
}

export interface AnimalModule {
  name: string;
  id: number;
}

@State<AnimalStateModel>({
  name: 'animals',
  defaults: {
    animals: [],
    count: 0,
  }
})
@Injectable()
export class AnimalState {
  @Selector()
  static animalsStateData(state: AnimalStateModel): AnimalStateModel {
    return state
  }

  @Selector()
  static animals(state: AnimalStateModel): AnimalModule[] {
    return state.animals
  }

  @Selector()
  static animalsCount(state: AnimalStateModel): number {
    return state.count
  }

  private animalsId = 0;

  @Action(AddAnimals)
  public addAnimals(ctx: StateContext<AnimalStateModel>, action: AddAnimals) {
    const state = ctx.getState();
    const animals = [...state.animals, {name: action.name, id: this.animalsId++}]
    ctx.setState({
      animals,
      count: animals.length
    })
  }

  @Action(RemoveAnimal)
  public removeAnimal(ctx: StateContext<AnimalStateModel>, action: RemoveAnimal) {
    const state = ctx.getState();
    const animals = [...state.animals].filter((animal) => animal.id !== action.id);
    ctx.setState({
      animals,
      count: animals.length
    });
  }
}
