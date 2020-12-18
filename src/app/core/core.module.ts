import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ContatoService } from '../service/contato.service';
import { PessoaService } from '../service/pessoa.service';

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      ButtonModule,
      PanelModule,
      DialogModule,
      InputTextModule,
      ToastModule,
      ConfirmDialogModule,
    ],
    declarations: [
    ],
    exports: [
      ToastModule,
      ConfirmDialogModule
    ],
    providers: [
      PessoaService,
      ContatoService,
      ConfirmationService,
      MessageService,
      Title,
      { provide: LOCALE_ID, useValue: 'pt-BR' }
    ]
  })
  export class CoreModule { }
  