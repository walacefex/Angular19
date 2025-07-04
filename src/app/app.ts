import { Component } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho';
import { ListaLivrosComponent } from './componentes/lista-livros/lista-livros';
import { RodapeComponent } from './componentes/rodape/rodape';

@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, RodapeComponent, ListaLivrosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'organo';
}
