import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { PrelievoComponent } from './components/prelievo/prelievo.component';
import { EstrattoContoComponent } from './components/estratto-conto/estratto-conto.component';
import { ContanteComponent } from './components/contante/contante.component';
import { AssegniComponent } from './components/assegni/assegni.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DepositoComponent,
    PrelievoComponent,
    EstrattoContoComponent,
    ContanteComponent,
    AssegniComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
