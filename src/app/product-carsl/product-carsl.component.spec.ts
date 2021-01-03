import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarslComponent } from './product-carsl.component';

describe('ProductCarslComponent', () => {
  let component: ProductCarslComponent;
  let fixture: ComponentFixture<ProductCarslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCarslComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
