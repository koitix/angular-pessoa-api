import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaModel } from 'src/app/model/pessoa.model';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  submmited =false;
  pessoa :PessoaModel = new PessoaModel();

  constructor(private pessoaService :PessoaService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submmited = true;
    this.pessoaService.cadastrarPessoa(this.pessoa).subscribe(
      data=>console.log(data),error =>console.log(error));
      this.pessoa = new PessoaModel();
      this.route.navigate(['pessoas'])
  }

}
