import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderContainerComponent } from './home-header-container.component';

describe('HomeHeaderContainerComponent', () => {
  let component: HomeHeaderContainerComponent;
  let fixture: ComponentFixture<HomeHeaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeHeaderContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
