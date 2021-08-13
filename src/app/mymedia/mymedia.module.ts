import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media/media.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule } from '@angular/router';
import { MymediaroutingRoutingModule } from './mymediarouting-routing.module';
import { MymediaComponent } from './mymedia.component';



@NgModule({
  declarations: [
    MediaComponent,
    UpdateComponent,
    MymediaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MymediaroutingRoutingModule
  ]
})
export class MymediaModule { }
