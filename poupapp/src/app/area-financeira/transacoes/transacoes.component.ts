import { Component, input } from "@angular/core";
import { CardComponent } from "../compartilhados/card/card.component";
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
}
