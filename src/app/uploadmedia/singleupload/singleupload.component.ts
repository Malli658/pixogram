import { Component, OnInit } from '@angular/core';
import { FileHandle } from '../../model/file-handle';

@Component({
  selector: 'app-singleupload',
  templateUrl: './singleupload.component.html',
  styleUrls: ['./singleupload.component.css']
})
export class SingleuploadComponent implements OnInit {
  uploadedFiles: FileHandle[];
  constructor() { }

  ngOnInit(): void {
  }

  filesDropped(files: FileHandle[]) {
    this.uploadedFiles = files;
  }

}
