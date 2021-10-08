import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AddAnimals} from "./animal.actions";

export interface AnimalStateModel {
  animals: string[];
  animalsCount: number;
}

const defaults: AnimalStateModel = {
  animals: [],
  animalsCount: 0,
};

@State<AnimalStateModel>({
  name: 'animals',
  defaults
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
    ctx.setState({
      animals: [...state.animals, action.name],
      animalsCount: state.animals.length + 1
    })
  }
}
