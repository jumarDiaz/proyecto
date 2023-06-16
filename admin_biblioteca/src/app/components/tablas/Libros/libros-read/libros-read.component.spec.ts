import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosReadComponent } from './libros-read.component';

describe('LibrosReadComponent', () => {
  let component: LibrosReadComponent;
  let fixture: ComponentFixture<LibrosReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
