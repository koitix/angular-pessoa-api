import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pessoa } from '../core/model';
import { ApiResponse } from '../api.response';

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

	cadastrarPessoa(pessoa: Pessoa): Observable<Pessoa> {
		return this.http.post<Pessoa>(this.pessoas_url+"/sem-contrato", pessoa);
	  }

	buscarPorCodigo(id: number): Observable<Pessoa> {
		return this.http.get<Pessoa>(`${this.pessoas_url}/${id}`);
	  }

	AlterarPessoa(pessoa: Pessoa,id:any): Observable<ApiResponse> {
		return this.http.put<ApiResponse>(`${this.pessoas_url}/${id}`, pessoa);
	  }

  RemoverPessoa(id:any):Observable<any>{
		return this.http.delete(this.pessoas_url.concat(id));
	}
}
