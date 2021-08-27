import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadmedia',
  templateUrl: './uploadmedia.component.html',
  styleUrls: ['./uploadmedia.component.css']
})
export class UploadmediaComponent implements OnInit {

  singleMedia ='';
  multipleMedia = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.route.navigate(['/upload/single']);
    this.singleMedia = 'active';
  }

  onSingle() {
    this.singleMedia = 'active';
    this.multipleMedia = '';
  }

  onMultiple() {
    this.singleMedia = '';
    this.multipleMedia = 'active';
  }

}
