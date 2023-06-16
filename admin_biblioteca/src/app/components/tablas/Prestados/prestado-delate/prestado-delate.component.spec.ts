import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoDelateComponent } from './prestado-delate.component';

describe('PrestadoDelateComponent', () => {
  let component: PrestadoDelateComponent;
  let fixture: ComponentFixture<PrestadoDelateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadoDelateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestadoDelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
