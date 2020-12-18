import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from '../../api.response';
import { PessoaService } from '../../service/pessoa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {
  pessoas: Observable<ApiResponse>;

  constructor(private pessoaService: PessoaService,
    private router: Router) { 
        setTimeout(function(){
          $(function(){
            $('#example').DataTable();
        });
        },2000);
    }

  ngOnInit() {
    this.pessoas = this.pessoaService.listarTodas();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);

  }

  removerPessoa(id: number) {
    this.pessoaService.RemoverPessoa(id)
      .subscribe(
        data => {
          console.log(data);
          this.pessoas = this.pessoaService.listarTodas();
        },
        error => console.log(error));
  }

  alterarPessoa(id: number){
    this.router.navigate(['update', id]);
  }


}
