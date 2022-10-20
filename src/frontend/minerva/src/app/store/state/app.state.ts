import {RouterReducerState} from "@ngrx/router-store";
import {IUserState, initUserState} from "./user.state";

export interface IAppState {
  router?: RouterReducerState;
  user: IUserState;
}

export const initialAppState: IAppState = {
  user: initUserState
}

export function getInitState(): IAppState {
  return initialAppState;
}