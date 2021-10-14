import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AddAnimals, RemoveAnimal} from "./animal.actions";

export interface AnimalStateModel {
  animals: string[];
  animalsCount: number;
}

@State<AnimalStateModel>({
  name: 'animals',
  defaults: {
    animals: [],
    animalsCount: 0,
  }
})
@Injectable()
export class AnimalState {
  @Selector()
  static animalsStateData(state: AnimalStateModel): AnimalStateModel {
    return state
  }

  @Selector()
  static animals(state: AnimalStateModel): string[] {
    return state.animals
  }

  @Selector()
  static animalsCount(state: AnimalStateModel): number {
    return state.animalsCount
  }

  @Action(AddAnimals)
  public addAnimals(ctx: StateContext<AnimalStateModel>, action: AddAnimals) {
    const state = ctx.getState();
    const animals = [...state.animals, action.name];
    ctx.setState({
      animals,
      animalsCount: animals.length
    })
  }

  @Action(RemoveAnimal)
  public removeAnimal(ctx: StateContext<AnimalStateModel>, action: RemoveAnimal) {
    const state = ctx.getState();
    const animals = [...state.animals].filter((el, ind) => ind !== action.id);
    ctx.setState({
      animals,
      animalsCount: animals.length
    });

  }
}
