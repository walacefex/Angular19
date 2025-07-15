import { Component, input, output } from "@angular/core";
import { CardComponent } from "../compartilhados/card/card.component";
import { Conta } from "../compartilhados/conta.model";
import { Transacao } from "../compartilhados/transacao.model";
import { BotaoAdicionarTransacaoComponent } from "./botao-adicionar-transacao/botao-adicionar-transacao.component";
import { TransacaoComponent } from "./transacao/transacao.component";

@Component({
  selector: "app-transacoes",
  imports: [
    TransacaoComponent,
    CardComponent,
    BotaoAdicionarTransacaoComponent,
  ],
  templateUrl: "./transacoes.component.html",
  styleUrl: "./transacoes.component.css",
})
export class TransacoesComponent {
  transacoes = input.required<Transacao[]>();

  contas = input.required<Conta[]>();

  transacaoCriada = output<Transacao>();
}
