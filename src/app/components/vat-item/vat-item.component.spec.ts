import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatItemComponent } from './vat-item.component';

describe('VatItemComponent', () => {
  let component: VatItemComponent;
  let fixture: ComponentFixture<VatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VatItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
