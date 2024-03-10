import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpaaswordComponent } from './forgetpaasword.component';

describe('ForgetpaaswordComponent', () => {
  let component: ForgetpaaswordComponent;
  let fixture: ComponentFixture<ForgetpaaswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetpaaswordComponent]
    });
    fixture = TestBed.createComponent(ForgetpaaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
