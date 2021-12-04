import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalbuttonComponent } from './finalbutton.component';

describe('FinalbuttonComponent', () => {
  let component: FinalbuttonComponent;
  let fixture: ComponentFixture<FinalbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
