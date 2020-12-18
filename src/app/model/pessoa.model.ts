import { ContatoModel } from "./contato.model";

export class PessoaModel {
    id: number;
    nome: string;
    cpf : string;
    data_nascimento: Date;
    contatos = new Array<ContatoModel>();
  }