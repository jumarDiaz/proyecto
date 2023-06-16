import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosCreateComponent } from './libros-create.component';

describe('LibrosCreateComponent', () => {
  let component: LibrosCreateComponent;
  let fixture: ComponentFixture<LibrosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
