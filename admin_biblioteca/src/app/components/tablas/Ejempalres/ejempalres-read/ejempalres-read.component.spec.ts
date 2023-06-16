import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjempalresReadComponent } from './ejempalres-read.component';

describe('EjempalresReadComponent', () => {
  let component: EjempalresReadComponent;
  let fixture: ComponentFixture<EjempalresReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjempalresReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjempalresReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
