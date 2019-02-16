import { ActionReducerMap, createFeatureSelector, createSelector, select} from "@ngrx/store";
import * as fromAccount from "./account/account.reducer";

export interface RootState {
    account: fromAccount.State;
}

export const reducers: ActionReducerMap<RootState> = {
    account: fromAccount.reducer,
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
