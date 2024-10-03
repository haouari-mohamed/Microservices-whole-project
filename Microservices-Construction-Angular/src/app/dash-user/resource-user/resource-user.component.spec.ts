import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceUserComponent } from './resource-user.component';

describe('ResourceUserComponent', () => {
  let component: ResourceUserComponent;
  let fixture: ComponentFixture<ResourceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
