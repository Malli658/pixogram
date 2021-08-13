import { Component, OnInit } from '@angular/core';
import { FileHandle } from '../../model/file-handle';

@Component({
  selector: 'app-multiupload',
  templateUrl: './multiupload.component.html',
  styleUrls: ['./multiupload.component.css']
})
export class MultiuploadComponent implements OnInit {

  uploadedFiles: FileHandle[];
  constructor() { }

  ngOnInit(): void {
  }

  filesDropped(files: FileHandle[]) {
    this.uploadedFiles = files;
  }

}
