import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountupdateComponent } from './accountupdate/accountupdate.component';
import { BlockedaccountComponent } from './blockedaccount/blockedaccount.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', component: AccountComponent, children: [
      { path: 'search', component: SearchComponent },
      { path: 'blocked_account', component: BlockedaccountComponent },
      { path: 'newsfeed', component: NewsfeedComponent },
      { path: 'update', component: AccountupdateComponent }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountroutingRoutingModule { }
