import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedaccountComponent } from './blockedaccount.component';

describe('BlockedaccountComponent', () => {
  let component: BlockedaccountComponent;
  let fixture: ComponentFixture<BlockedaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
