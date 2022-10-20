import {IUser} from "../../classes/users"

export interface IUserState {
  user: IUser | null
}

export const initUserState: IUserState = {
  user: null
}