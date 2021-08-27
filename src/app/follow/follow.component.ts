import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit, OnChanges,OnDestroy {

  testValue = 9;

  constructor(private formBuilder: FormBuilder, private route: Router) {
    console.log("i am constructor");
  }
    ngOnDestroy(): void {
      console.log("i am on destroy");
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log("i am on change");
    }

  ngOnInit(): void {
    
    console.log("ng onit");
  }

  

  incMthod() {
    console.log("i am incMethos");
    this.testValue = this.testValue + 1;
  }

}
