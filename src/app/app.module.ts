import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AlterarPessoaComponent } from './pessoa/alterar-pessoa/alterar-pessoa.component';
import { ListaPessoaComponent } from './pessoa/lista-pessoa/lista-pessoa.component';
import { CadastroPessoaComponent } from './pessoa/cadastro-pessoa/cadastro-pessoa.component';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoaService } from './service/pessoa.service';
import { DataTablesModule } from 'angular-datatables';
import { ContatoPessoaComponent } from './contato/contato-pessoa/contato-pessoa.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    AlterarPessoaComponent,
    ListaPessoaComponent,
    CadastroPessoaComponent,
    ContatoPessoaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
    DataTablesModule,
    CoreModule,
  ],
  providers: [PessoaService,{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
