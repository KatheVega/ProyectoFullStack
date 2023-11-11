import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidarClaveComponent } from './olvidar-clave.component';

describe('OlvidarClaveComponent', () => {
  let component: OlvidarClaveComponent;
  let fixture: ComponentFixture<OlvidarClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvidarClaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlvidarClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
