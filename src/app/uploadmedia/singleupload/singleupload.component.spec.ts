import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleuploadComponent } from './singleupload.component';

describe('SingleuploadComponent', () => {
  let component: SingleuploadComponent;
  let fixture: ComponentFixture<SingleuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
