import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { MymediaComponent } from './mymedia.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '', component: MymediaComponent, children: [
      { path: 'media', component: MediaComponent },
      { path: 'update', component: UpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MymediaroutingRoutingModule { }
