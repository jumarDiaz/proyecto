import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosUpdateComponent } from './libros-update.component';

describe('LibrosUpdateComponent', () => {
  let component: LibrosUpdateComponent;
  let fixture: ComponentFixture<LibrosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
