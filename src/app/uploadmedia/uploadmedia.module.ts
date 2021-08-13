import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadmediaComponent } from './uploadmedia.component';
import { SingleuploadComponent } from './singleupload/singleupload.component';
import { MultiuploadComponent } from './multiupload/multiupload.component';
import { RouterModule } from '@angular/router';
import { UploadmediaroutingRoutingModule } from './uploadmediarouting-routing.module';
import { ImageDragDirectiveDirective } from '../directive/image-drag-directive.directive';


@NgModule({
  declarations: [
    UploadmediaComponent,
    SingleuploadComponent,
    MultiuploadComponent,
    ImageDragDirectiveDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    UploadmediaroutingRoutingModule
  ]
})
export class UploadmediaModule { }
