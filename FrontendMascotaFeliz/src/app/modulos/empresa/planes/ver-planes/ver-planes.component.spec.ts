import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPlanesComponent } from './ver-planes.component';

describe('VerPlanesComponent', () => {
  let component: VerPlanesComponent;
  let fixture: ComponentFixture<VerPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
