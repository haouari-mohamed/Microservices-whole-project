import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTacheUserComponent } from './resource-tache-user.component';

describe('ResourceTacheUserComponent', () => {
  let component: ResourceTacheUserComponent;
  let fixture: ComponentFixture<ResourceTacheUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourceTacheUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourceTacheUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
