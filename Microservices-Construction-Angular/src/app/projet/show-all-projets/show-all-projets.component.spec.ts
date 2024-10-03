import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllProjetsComponent } from './show-all-projets.component';

describe('ShowAllProjetsComponent', () => {
  let component: ShowAllProjetsComponent;
  let fixture: ComponentFixture<ShowAllProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowAllProjetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAllProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
