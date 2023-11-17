import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaButtonComponent } from './cta-button.component';

describe('CtaButtonComponent', () => {
  let component: CtaButtonComponent;
  let fixture: ComponentFixture<CtaButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaButtonComponent]
    });
    fixture = TestBed.createComponent(CtaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
