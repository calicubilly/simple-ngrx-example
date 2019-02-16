import { Action } from "@ngrx/store";
import { Account } from "./account.model"

export enum AccountActionTypes {
  SetAccount = "[Account] Set Account",
  DeleteAccount = "[Account] Delete Account"
}

export class SetAccount implements Action {
  readonly type = AccountActionTypes.SetAccount;

  constructor(public payload: { account: Account }) {}
}

export class DeleteAccount implements Action {
    readonly type = AccountActionTypes.DeleteAccount;
  
    constructor() {}
}

export type AccountActions =
  | SetAccount
  | DeleteAccount