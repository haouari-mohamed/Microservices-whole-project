import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTachesComponent } from './show-taches.component';

describe('ShowTachesComponent', () => {
  let component: ShowTachesComponent;
  let fixture: ComponentFixture<ShowTachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowTachesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
