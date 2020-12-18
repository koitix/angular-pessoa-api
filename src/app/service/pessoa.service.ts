import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { PessoaModel } from '../model/pessoa.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PessoaService {

	pessoas_url ='https://pessoa-api-rest.herokuapp.com/pessoas/';

  constructor(private http: HttpClient) { }

  listarTodas(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.pessoas_url + "listar-todos");
  }


  	listar() : Observable<ApiResponse>{
  	  return this.http.get<ApiResponse>(this.pessoas_url + "listar-todos");
	}

	cadastrarPessoa(pessoa: PessoaModel): Observable<PessoaModel> {
		return this.http.post<PessoaModel>(this.pessoas_url+"/sem-contrato", pessoa);
	  }

	buscarPorCodigo(id: number): Observable<PessoaModel> {
		return this.http.get<PessoaModel>(`${this.pessoas_url}/${id}`);
	  }

	AlterarPessoa(pessoa: PessoaModel,id:any): Observable<ApiResponse> {
		return this.http.put<ApiResponse>(`${this.pessoas_url}/${id}`, pessoa);
	  }

  RemoverPessoa(id:any):Observable<any>{
		return this.http.delete(this.pessoas_url.concat(id));
	}
}
