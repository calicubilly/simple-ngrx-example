import { Component } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { RootState, selectAccount, selectAccountName, selectAccountAge} from '../store/index';
import { Account } from '../store/account/account.model';
import {  Country } from '../store/country/country.model';
import { SetAccount, DeleteAccount } from '../store/account/account.actions';
import { initCountry, DeleteCountry } from '../store/country/country.actions';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  account$ =  this.store.pipe(select(selectAccount));
  accountName$ =  this.store.pipe(select(selectAccountName));
  accountAge$ =  this.store.pipe(select(selectAccountAge));

  title = 'my-app';
  name: string;
  age: number;
  account: Account;

  nameInput: string;
  ageInput: number
 

  constructor(public store: Store<RootState>, private apiService: ApiService) {
    // // subscribe to account
    // this.account$.subscribe(account=> {
    //   this.account = account;
    // })

    // // subscribe to account name only
    // this.accountName$ .subscribe(name=> {
    //   this.name = name;
    // })

    // // subscribe to account age only
    // this.accountAge$ .subscribe(age=> {
    //   this.age = age;
    // })

    this.getCountries();
  }

   async getCountries() {
    let result = await this.apiService.getCountries().toPromise();
    this.store.dispatch(new initCountry({countries: result}));
  }

  setAccount() {
    let account: Account = {
      name: this.nameInput,
      age: this.ageInput
    }
    this.store.dispatch(new SetAccount({account}))
  }

  deleteAccount() {
    this.clear();
    this.store.dispatch(new DeleteAccount());
  }

  clear() {
    this.nameInput = '';
    this.ageInput = null;
  }
}
