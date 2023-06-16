import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosDelateComponent } from './libros-delate.component';

describe('LibrosDelateComponent', () => {
  let component: LibrosDelateComponent;
  let fixture: ComponentFixture<LibrosDelateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosDelateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosDelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
