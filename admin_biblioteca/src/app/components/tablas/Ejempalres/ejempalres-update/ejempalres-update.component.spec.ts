import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjempalresUpdateComponent } from './ejempalres-update.component';

describe('EjempalresUpdateComponent', () => {
  let component: EjempalresUpdateComponent;
  let fixture: ComponentFixture<EjempalresUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjempalresUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjempalresUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
