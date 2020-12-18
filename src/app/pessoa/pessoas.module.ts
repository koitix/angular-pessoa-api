import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { AlterarPessoaComponent } from './alterar-pessoa/alterar-pessoa.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    DialogModule,
  ],
  declarations: [
    CadastroPessoaComponent,
    AlterarPessoaComponent,
    ListaPessoaComponent
  ],
  exports: []
})
export class PessoasModule { }
