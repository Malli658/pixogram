import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { MymediaComponent } from './mymedia.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '', component: MymediaComponent
  },
  { path: 'view/:id', component: MediaComponent },
  { path: 'update/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MymediaroutingRoutingModule { }
