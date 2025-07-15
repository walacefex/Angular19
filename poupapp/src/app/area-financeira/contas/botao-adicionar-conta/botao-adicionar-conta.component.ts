import { Component, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BotaoComponent } from "../../../compartilhados/botao/botao.component";
import { ModalComponent } from "../../../compartilhados/modal/modal.component";
import { Conta } from "../../compartilhados/conta.model";

@Component({
  selector: "app-botao-adicionar-conta",
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: "./botao-adicionar-conta.component.html",
  styleUrl: "./botao-adicionar-conta.component.css",
})
export class BotaoAdicionarContaComponent {
  modalAberto = signal(false);

  novaContaForm = {
    nome: "",
    saldoInicial: "",
  };

  contaCriada = output<Conta>();

  abrirModal() {
    this.modalAberto.set(true);
  }

  aoSubmeter() {
    const novaConta = new Conta(
      this.novaContaForm.nome,
      Number(this.novaContaForm.saldoInicial)
    );

    this.contaCriada.emit(novaConta);
    this.modalAberto.set(false);
  }
}
