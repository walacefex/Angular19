import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { FormNovaTransacaoComponent } from './components/form-nova-transacao/form-nova-transacao.component';
import { TipoTransacao, Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      switch (transacaoAtual.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacaoAtual.valor;
        case TipoTransacao.SAQUE:
          return acc - transacaoAtual.valor;
        default:
          throw new Error(
            `Tipo de transação desconhecido: ${transacaoAtual.tipo}`
          );
      }
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]);
  }
}
