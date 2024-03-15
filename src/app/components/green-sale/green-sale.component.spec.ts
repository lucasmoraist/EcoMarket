import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSaleComponent } from './green-sale.component';

describe('GreenSaleComponent', () => {
  let component: GreenSaleComponent;
  let fixture: ComponentFixture<GreenSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
