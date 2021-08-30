import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileHandle } from '../../model/file-handle';
import { Media } from '../../model/media';
import { MediaService } from '../../service/media.service';

@Component({
  selector: 'app-multiupload',
  templateUrl: './multiupload.component.html',
  styleUrls: ['./multiupload.component.css']
})
export class MultiuploadComponent implements OnInit {

  mediaForm: FormGroup;
  medias: FormArray;
  file: File;
  media: Media;
  mediasData = new Array<Media>();
  userId: string;

  uploadedFiles: FileHandle[];
  constructor(private formBuilder: FormBuilder, private mediaSerive: MediaService, private route: Router) {
   
  }

  ngOnInit(): void {
    console.log("ia ma ngonit");
    let userId = sessionStorage.getItem('_userId');
    if (userId)
      this.userId = userId;
    this.mediaForm = this.formBuilder.group({
      medias: this.formBuilder.array([this.createMedia()])
    });
  }

  filesDropped(files: FileHandle[]) {
    this.uploadedFiles = files;
  }

  createMedia(): FormGroup {
    return this.formBuilder.group({
      title: '',
      description: '',
      tags: '',
      effects:''
    });
  }

  addMedia(): void {
    this.medias = this.mediaForm.get('medias') as FormArray;
    this.medias.push(this.createMedia());
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload(index: any) {
    this.media = new Media();
    this.media.fileSize = this.file.size;
    this.media.fileType = this.file.type;
    this.media.fileName = this.file.name;
    this.media.type = this.file.type.substring(0, this.file.type.indexOf('/')).toUpperCase();

    this.mediaSerive.uploadFile(this.file).subscribe((event: any) => {
      if (typeof (event) === 'object') {
        this.media.mediaID = event.mediaId;
        //this.mediasData[index] = this.media;
        this.mediasData.push(this.media);
      }
    });
    console.log(this.mediasData);
  }

  onSubmit() {
    var arrayControl = this.mediaForm.get('medias') as FormArray;
    for (let i = 0; i < this.mediasData.length; i++) {
      this.mediasData[i].mediaTitle = arrayControl.at(i).value.title;
      this.mediasData[i].mediaDescription = arrayControl.at(i).value.description;
      this.mediasData[i].tags = Array.from(arrayControl.at(i).value.tags);
      this.mediasData[i].effects = Array.from(arrayControl.at(i).value.effects);
      this.mediasData[i].userId = Number(this.userId);
    }
    this.mediaSerive.uploadMedias(this.mediasData).subscribe(data => {
      console.log("success");
      this.route.navigate(['/mymedia']);

    }, error => {
      console.log("error occered");
    });
  }

  get mediaFormGroups() {
    return this.mediaForm.get('medias') as FormArray
  }

}
