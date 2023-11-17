import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAsUserComponent } from './view-as-user.component';

describe('ViewAsUserComponent', () => {
  let component: ViewAsUserComponent;
  let fixture: ComponentFixture<ViewAsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAsUserComponent]
    });
    fixture = TestBed.createComponent(ViewAsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
