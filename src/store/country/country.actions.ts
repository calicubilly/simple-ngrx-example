import { Action } from "@ngrx/store";

export enum CountryActionTypes {
  initCountry = "[Country] init Country",
  DeleteCountry = "[Country] Delete Country"
}

export class initCountry implements Action {
  readonly type = CountryActionTypes.initCountry;

  constructor(public payload: { countries: any }) {}
}

export class DeleteCountry implements Action {
    readonly type = CountryActionTypes.DeleteCountry;
  
    constructor(public payload: {name: string}) {}
}

export type CountryActions =
  | initCountry
  | DeleteCountry