import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllressourceComponent } from './allressource.component';

describe('AllressourceComponent', () => {
  let component: AllressourceComponent;
  let fixture: ComponentFixture<AllressourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllressourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllressourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
