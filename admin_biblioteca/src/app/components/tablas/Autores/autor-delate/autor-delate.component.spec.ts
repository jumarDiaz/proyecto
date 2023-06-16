import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorDelateComponent } from './autor-delate.component';

describe('AutorDelateComponent', () => {
  let component: AutorDelateComponent;
  let fixture: ComponentFixture<AutorDelateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorDelateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorDelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
