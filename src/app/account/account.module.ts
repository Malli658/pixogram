import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { BlockedaccountComponent } from './blockedaccount/blockedaccount.component';
import { AccountupdateComponent } from './accountupdate/accountupdate.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { AccountroutingRoutingModule } from './accountrouting-routing.module';



@NgModule({
  declarations: [
    NewsfeedComponent,
    BlockedaccountComponent,
    AccountupdateComponent,
    SearchComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountroutingRoutingModule
  ]
})
export class AccountModule { }
