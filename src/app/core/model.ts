
export class Contato {
  id: number;
    nome: string;
    email: string;
    telefone: string;
  
    constructor(id?: number,
      nome?: string,
      email?: string,
      telefone?: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
  }
  
  export class Pessoa {
    id: number;
    nome: string;
    cpf : string;
    data_nascimento: Date;
    contatos = new Array<Contato>();
  }
  