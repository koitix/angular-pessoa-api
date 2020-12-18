import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Pessoa } from '../../core/model';
import { PessoaService } from '../../service/pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  submmited =false;
  pessoa = new Pessoa();

  constructor(private pessoaService :PessoaService,    private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
  }

  onSubmit(){
    this.submmited = true;
    this.pessoaService.cadastrarPessoa(this.pessoa).subscribe(
      data=>console.log(data),error =>console.log(error));
      this.pessoa = new Pessoa();
      this.router.navigate(['/pessoas'])
  }

}
