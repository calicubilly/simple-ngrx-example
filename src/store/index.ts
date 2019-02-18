import { ActionReducerMap, createFeatureSelector, createSelector, select, State} from "@ngrx/store";
import * as fromAccount from "./account/account.reducer";
import * as fromCountry from "./country/country.reducer";

export interface RootState {
    account: fromAccount.State;
    country: fromCountry.State;
}

export const reducers: ActionReducerMap<RootState> = {
    account: fromAccount.reducer,
    country: fromCountry.reducer
};

export const selectAccountState = createFeatureSelector<fromAccount.State>("account");

export const selectAccount = createSelector(
    selectAccountState,
    state => state.account
);

export const selectAccountName = createSelector(
    selectAccount,
    account => account.name
);

export const selectAccountAge = createSelector(
    selectAccount,
    account => account.age
);

export const selectCountryState = createFeatureSelector<fromCountry.State>("country");

export const selectCountry = createSelector(
    selectCountryState,
    state => state.countries
)
