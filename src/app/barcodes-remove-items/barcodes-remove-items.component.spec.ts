import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodesRemoveItemsComponent } from './barcodes-remove-items.component';

describe('BarcodesRemoveItemsComponent', () => {
  let component: BarcodesRemoveItemsComponent;
  let fixture: ComponentFixture<BarcodesRemoveItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarcodesRemoveItemsComponent]
    });
    fixture = TestBed.createComponent(BarcodesRemoveItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
