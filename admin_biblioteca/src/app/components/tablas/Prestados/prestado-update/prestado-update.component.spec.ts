import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoUpdateComponent } from './prestado-update.component';

describe('PrestadoUpdateComponent', () => {
  let component: PrestadoUpdateComponent;
  let fixture: ComponentFixture<PrestadoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestadoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
