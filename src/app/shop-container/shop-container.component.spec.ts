import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopContainerComponent } from './shop-container.component';

describe('ShopContainerComponent', () => {
  let component: ShopContainerComponent;
  let fixture: ComponentFixture<ShopContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
