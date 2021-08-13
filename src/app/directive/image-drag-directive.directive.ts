import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileItem } from 'ng2-file-upload';
import { FileHandle } from '../model/file-handle';


@Directive({
  selector: '[appImageDragDirective]'
})
export class ImageDragDirectiveDirective {
  
  @Output('files') files: EventEmitter<FileHandle[]> = new EventEmitter();
  @HostBinding('style.background') public background = '#eee';
  constructor(private sanitizer: DomSanitizer) { }

  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    
    let files: FileHandle[] = [];

    
    var length = evt.dataTransfer?.files.length;
    if (length != undefined) {
      for (let i = 0; i < length; i++) {
        const file = evt.dataTransfer?.files[i];
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        if (file != undefined)
        files.push({
          file,
          url
        });
      }
    }
    
    
    if (files.length > 0) {
      this.files.emit(files);
    }
  }
}
