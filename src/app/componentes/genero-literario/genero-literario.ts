import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { LivroComponent } from '../livro/livro';
import { IGeneroLiterario } from '../livro/livro.interface';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent, CommonModule],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterarioComponent {
  genero = input.required<IGeneroLiterario>();
}
