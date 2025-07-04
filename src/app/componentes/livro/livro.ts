import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ILivro } from './livro.interface';

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class LivroComponent {
  livro = input.required<ILivro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}
