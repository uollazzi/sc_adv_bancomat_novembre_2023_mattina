import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstrattoContoComponent } from './components/estratto-conto/estratto-conto.component';
import { PrelievoComponent } from './components/prelievo/prelievo.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { ContanteComponent } from './components/contante/contante.component';
import { AssegniComponent } from './components/assegni/assegni.component';

const routes: Routes = [
  {
    path: "estratto-conto", component: EstrattoContoComponent
  },
  {
    path: "prelievo", component: PrelievoComponent
  },
  {
    path: "deposito", component: DepositoComponent,
    children: [
      {
        path: "contante", component: ContanteComponent
      },
      {
        path: "assegni", component: AssegniComponent
      }
    ]
  },
  {
    path: "", redirectTo: "estratto-conto", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
