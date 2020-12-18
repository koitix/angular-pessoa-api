import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contato } from '../../core/model';

@Component({
  selector: 'app-contato-pessoa',
  templateUrl: './contato-pessoa.component.html',
  styleUrls: ['./contato-pessoa.component.css']
})
export class ContatoPessoaComponent implements OnInit {

  
  @Input() contatos: Array<Contato>;
  contato: Contato;
  contatoIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  prepararNovoContato() {
    this.contato = new Contato();
    this.contatoIndex = this.contatos.length;
  }

  prepararEdicaoContato(contato: Contato, index: number) {
    this.contato = this.clonarContato(contato);
    this.contatoIndex = index;
  }

  confirmarContato(frm: FormControl) {
    this.contatos[this.contatoIndex] = this.clonarContato(this.contato);
    frm.reset();
  }

  removerContato(index: number) {
    this.contatos.splice(index, 1);
  }

  clonarContato(contato: Contato): Contato {
    return new Contato(contato.id,
      contato.nome, contato.email, contato.telefone);
  }

  get editando() {
    return this.contato && this.contato.id;
  }
}
