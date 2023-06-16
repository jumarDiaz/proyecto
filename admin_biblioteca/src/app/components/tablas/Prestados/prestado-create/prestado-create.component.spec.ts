import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoCreateComponent } from './prestado-create.component';

describe('PrestadoCreateComponent', () => {
  let component: PrestadoCreateComponent;
  let fixture: ComponentFixture<PrestadoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestadoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
