import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDComponent } from './listar-d.component';

describe('ListarDComponent', () => {
  let component: ListarDComponent;
  let fixture: ComponentFixture<ListarDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
