import { KeyValuePipe } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../../modelos/transacao';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css',
})
export class FormNovaTransacaoComponent {
  tipoTransacao = '';
  valorTransacao = '';

  transacaoCriada = output<Transacao>();

  TipoTransacaoEnum = TipoTransacao;

  aoSubmeter() {
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );

    this.transacaoCriada.emit(transacao);
    this.tipoTransacao = '';
    this.valorTransacao = '';
  }
}
