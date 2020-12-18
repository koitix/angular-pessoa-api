import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterarPessoaComponent } from './pessoa/alterar-pessoa/alterar-pessoa.component';
import { CadastroPessoaComponent } from './pessoa/cadastro-pessoa/cadastro-pessoa.component';
import { ListaPessoaComponent } from './pessoa/lista-pessoa/lista-pessoa.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas', pathMatch: 'full' },
  { path: 'add', component: CadastroPessoaComponent },
  { path: 'pessoas', component: ListaPessoaComponent },
  { path: 'update/:id', component: AlterarPessoaComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,
    RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }