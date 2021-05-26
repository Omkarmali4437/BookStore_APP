import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignUpLoginComponent } from './user-sign-up-login.component';

describe('UserSignUpLoginComponent', () => {
  let component: UserSignUpLoginComponent;
  let fixture: ComponentFixture<UserSignUpLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSignUpLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignUpLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
