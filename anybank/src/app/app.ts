import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FormNovaTransacaoComponent } from './components/form-nova-transacao/form-nova-transacao.component';
import { Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'anybank';
  processarTransacao(transacao: Transacao) {
    console.log(transacao);
  }
}
