import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRessourceComponent } from './assign-ressource.component';

describe('AssignRessourceComponent', () => {
  let component: AssignRessourceComponent;
  let fixture: ComponentFixture<AssignRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignRessourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
