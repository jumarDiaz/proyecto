import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoReadComponent } from './prestado-read.component';

describe('PrestadoReadComponent', () => {
  let component: PrestadoReadComponent;
  let fixture: ComponentFixture<PrestadoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadoReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestadoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
