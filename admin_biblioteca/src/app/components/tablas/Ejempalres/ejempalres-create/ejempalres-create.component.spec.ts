import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjempalresCreateComponent } from './ejempalres-create.component';

describe('EjempalresCreateComponent', () => {
  let component: EjempalresCreateComponent;
  let fixture: ComponentFixture<EjempalresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjempalresCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjempalresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
