import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLibroComponent } from './registro-libro.component';

describe('RegistroLibroComponent', () => {
  let component: RegistroLibroComponent;
  let fixture: ComponentFixture<RegistroLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
