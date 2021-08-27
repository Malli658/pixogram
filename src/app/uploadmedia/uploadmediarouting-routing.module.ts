import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiuploadComponent } from './multiupload/multiupload.component';
import { SingleuploadComponent } from './singleupload/singleupload.component';
import { UploadmediaComponent } from './uploadmedia.component';

const routes: Routes = [
  {
    path: '', component: UploadmediaComponent, children: [
      { path: 'single', component: SingleuploadComponent },
      { path: 'multiple', component: MultiuploadComponent }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadmediaroutingRoutingModule { }
