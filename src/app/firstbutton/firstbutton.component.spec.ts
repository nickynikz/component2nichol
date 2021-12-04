import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstbuttonComponent } from './firstbutton.component';

describe('FirstbuttonComponent', () => {
  let component: FirstbuttonComponent;
  let fixture: ComponentFixture<FirstbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
