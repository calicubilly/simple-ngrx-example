import {Account} from './account.model';
import {AccountActions, AccountActionTypes} from "./account.actions";

export interface State {
  account: Account;
}

export const initialState: State = {
  account: {
      name: "Guest",
      age: 0
    }
};

export function reducer(state = initialState, action: AccountActions): State {
  switch (action.type) {
    case AccountActionTypes.SetAccount:
      return { ...state, account: action.payload.account};
    case AccountActionTypes.DeleteAccount:
      return initialState
    default:
      return state;
  }
}
