import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodesAddItemsComponent } from './barcodes-add-items.component';

describe('BarcodesAddItemsComponent', () => {
  let component: BarcodesAddItemsComponent;
  let fixture: ComponentFixture<BarcodesAddItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarcodesAddItemsComponent]
    });
    fixture = TestBed.createComponent(BarcodesAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
