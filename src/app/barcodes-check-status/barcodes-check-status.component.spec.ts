import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodesCheckStatusComponent } from './barcodes-check-status.component';

describe('BarcodesCheckStatusComponent', () => {
  let component: BarcodesCheckStatusComponent;
  let fixture: ComponentFixture<BarcodesCheckStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarcodesCheckStatusComponent]
    });
    fixture = TestBed.createComponent(BarcodesCheckStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
