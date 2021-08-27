import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { FileHandle } from '../../model/file-handle';
import { Media } from '../../model/media';
import { MediaService } from '../../service/media.service';

@Component({
  selector: 'app-singleupload',
  templateUrl: './singleupload.component.html',
  styleUrls: ['./singleupload.component.css']
})
export class SingleuploadComponent implements OnInit {
  uploadedFiles: FileHandle[];
  file: File;
  fileAdded = false;
  media: Media = new Media();
  mediaId = '';
  mediaForm: FormGroup;
  constructor(private mediaSerive: MediaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.mediaForm = this.formBuilder.group({
      tags: ['', Validators.required],
      title: ['', Validators.required],
      effects: ['', Validators.required],
      description:['']
    });
  }


  
  filesDropped(files: FileHandle[]) {
    this.uploadedFiles = files;
    this.fileAdded = true;
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    console.log(this.file);
    this.mediaSerive.uploadFile(this.file).subscribe((event: any) => {
      if (typeof (event) === 'object') {
        this.fileAdded = true;
        this.mediaId = event.mediaId;
      }
    });
  }

  onDataSubmit() {

    
    this.media.fileSize = this.file.size;
    this.media.fileType = this.file.type;
    this.media.fileName = this.file.name;
    this.media.type = this.file.type.substring(0, this.file.type.indexOf('/')).toUpperCase();

    this.media.mediaID = this.mediaId;
    this.media.effects = Array.from(this.mediaForm.value.effects);
    this.media.mediaDescription = this.mediaForm.value.description;
    this.media.mediaTitle = this.mediaForm.value.title;
    this.media.tags = Array.from(this.mediaForm.value.tags);
    this.media.userId = 1;
    console.log(this.media);
    this.mediaSerive.uploadMedia(this.media).subscribe(data => {
      this.mediaForm.reset();
      this.fileAdded = false;
    });
  }
}
