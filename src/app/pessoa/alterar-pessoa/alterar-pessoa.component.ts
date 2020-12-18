import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { PessoaModel } from 'src/app/model/pessoa.model';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-alterar-pessoa',
  templateUrl: './alterar-pessoa.component.html',
  styleUrls: ['./alterar-pessoa.component.css']
})

export class AlterarPessoaComponent implements OnInit {

  id: number;
  pessoa: PessoaModel;
  apiResponse:ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
    private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoa = new PessoaModel();

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
    this.pessoa = new PessoaModel();
    this.router.navigate(['/pessoas']);
    }

  
  list(){
    this.router.navigate(['pessoas']);
  }
}