import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../service/pessoa.service';
import { ApiResponse } from '../../api.response';
import { Pessoa } from '../../core/model';

@Component({
  selector: 'app-alterar-pessoa',
  templateUrl: './alterar-pessoa.component.html',
  styleUrls: ['./alterar-pessoa.component.css']
})

export class AlterarPessoaComponent implements OnInit {

  id: number;
  pessoa: Pessoa;
  apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
    private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();

    this.id = this.route.snapshot.params['id'];
    this.pessoaService.buscarPorCodigo(this.id)
      .subscribe(data => {
        console.log(data),
        this.pessoa = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.pessoaService.AlterarPessoa( this.pessoa,this.id)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pessoa = new Pessoa();
    this.router.navigate(['/pessoas']);
    }

  
  list(){
    this.router.navigate(['pessoas']);
  }
}