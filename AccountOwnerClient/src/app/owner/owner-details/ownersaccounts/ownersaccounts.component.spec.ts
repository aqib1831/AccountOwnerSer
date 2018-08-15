import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersaccountsComponent } from './ownersaccounts.component';

describe('OwnersaccountsComponent', () => {
  let component: OwnersaccountsComponent;
  let fixture: ComponentFixture<OwnersaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
