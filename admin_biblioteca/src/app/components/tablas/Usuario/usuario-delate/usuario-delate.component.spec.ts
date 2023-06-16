import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDelateComponent } from './usuario-delate.component';

describe('UsuarioDelateComponent', () => {
  let component: UsuarioDelateComponent;
  let fixture: ComponentFixture<UsuarioDelateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDelateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
