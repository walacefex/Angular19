import { Component, input, output } from "@angular/core";
import { CardComponent } from "../compartilhados/card/card.component";
import { Conta } from "../compartilhados/conta.model";
import { BotaoAdicionarContaComponent } from "./botao-adicionar-conta/botao-adicionar-conta.component";
import { ContaComponent } from "./conta/conta.component";

@Component({
  selector: "app-contas",
  imports: [ContaComponent, CardComponent, BotaoAdicionarContaComponent],
  templateUrl: "./contas.component.html",
  styleUrl: "./contas.component.css",
})
export class ContasComponent {
  contas = input.required<Conta[]>();

  contaCriada = output<Conta>();
}
