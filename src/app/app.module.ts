import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { InvestPage } from "../pages/invest/invest";
import { AccountPage } from "../pages/account/account";
import { BorrowPage } from "../pages/borrow/borrow";
import { SearchPage } from "../pages/search/search";

import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InvestPage,
    AccountPage,
    BorrowPage,
    SearchPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    InvestPage,
    AccountPage,
    BorrowPage,
    SearchPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
