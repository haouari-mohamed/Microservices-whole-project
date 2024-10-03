import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRessourceTacheComponent } from './show-ressource-tache.component';

describe('ShowRessourceTacheComponent', () => {
  let component: ShowRessourceTacheComponent;
  let fixture: ComponentFixture<ShowRessourceTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowRessourceTacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowRessourceTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
