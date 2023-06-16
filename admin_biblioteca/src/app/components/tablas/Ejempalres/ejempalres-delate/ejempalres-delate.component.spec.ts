import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjempalresDelateComponent } from './ejempalres-delate.component';

describe('EjempalresDelateComponent', () => {
  let component: EjempalresDelateComponent;
  let fixture: ComponentFixture<EjempalresDelateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjempalresDelateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjempalresDelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
