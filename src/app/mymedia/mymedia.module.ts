import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media/media.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule } from '@angular/router';
import { MymediaroutingRoutingModule } from './mymediarouting-routing.module';
import { MymediaComponent } from './mymedia.component';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
import { CommenterComponent } from './commenter/commenter.component';
import { ReplayComponent } from './replay/replay.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    MediaComponent,
    UpdateComponent,
    MymediaComponent,
    CommentsComponent,
    CommenterComponent,
    ReplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MymediaroutingRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class MymediaModule { }
