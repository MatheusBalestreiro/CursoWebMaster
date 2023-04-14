import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemComponent } from './lista-item.component';

describe('ListaItemComponent', () => {
  let component: ListaItemComponent;
  let fixture: ComponentFixture<ListaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
