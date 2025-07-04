import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLivrosComponent } from './lista-livros';

describe('ListaLivros', () => {
  let component: ListaLivrosComponent;
  let fixture: ComponentFixture<ListaLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaLivrosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
