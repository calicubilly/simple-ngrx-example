import {Country} from './country.model';
import {CountryActions, CountryActionTypes} from "./country.actions";

export interface State {
  countries: Country[];
}

export const initialState: State = {
  countries: []
};

export function reducer(state = initialState, action: CountryActions): State {
  switch (action.type) {
    case CountryActionTypes.initCountry:
      return { ...state, countries: action.payload.countries};
    case CountryActionTypes.DeleteCountry:
      return {...state, countries: state.countries.filter(country => country.name != action.payload.name)}
    default:
      return state;
  }
}
