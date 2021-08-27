import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommenterComponent } from './commenter.component';

describe('CommenterComponent', () => {
  let component: CommenterComponent;
  let fixture: ComponentFixture<CommenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
