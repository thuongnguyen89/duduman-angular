import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBarcodesComponent } from './admin-barcodes.component';

describe('AdminBarcodesComponent', () => {
  let component: AdminBarcodesComponent;
  let fixture: ComponentFixture<AdminBarcodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBarcodesComponent]
    });
    fixture = TestBed.createComponent(AdminBarcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
