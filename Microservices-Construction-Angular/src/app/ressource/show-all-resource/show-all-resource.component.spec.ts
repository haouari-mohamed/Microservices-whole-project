import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllResourceComponent } from './show-all-resource.component';

describe('ShowAllResourceComponent', () => {
  let component: ShowAllResourceComponent;
  let fixture: ComponentFixture<ShowAllResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAllResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
