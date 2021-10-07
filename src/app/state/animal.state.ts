import {Injectable} from "@angular/core";
import {Action, State, StateContext} from "@ngxs/store";
import {AddAnimals} from "./animal.actions";

interface AnimaStateModel {
  animals: string[];
  animalsCount: number;
}

@State<string[]>({
  name: 'animals',
  defaults: []
})
@Injectable()
export class AnimalState {
  @Action(AddAnimals)
  public addAnimals(ctx: StateContext<string[]>, action: AddAnimals){
    console.log(action);
    const state = ctx.getState();
    ctx.setState([
      ...state,
      action.name
    ])
  }
}
