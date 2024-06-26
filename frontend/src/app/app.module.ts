import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CadastrarProdutosComponent } from './components/cadastrar-produtos/cadastrar-produtos.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { IConfig, NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    CadastrarProdutosComponent,
    ListarProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCheckboxModule,
    NgxMaskDirective,
    MatProgressSpinnerModule
  ],
  providers: [provideHttpClient(withFetch()), provideNgxMask(), { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
