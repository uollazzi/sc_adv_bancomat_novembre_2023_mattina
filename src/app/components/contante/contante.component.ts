import { Component } from '@angular/core';
import { BancomatService } from '../../services/bancomat.service';

@Component({
  selector: 'app-contante',
  templateUrl: './contante.component.html',
  styleUrl: './contante.component.css'
})
export class ContanteComponent {
  importo = 0;
  message = "";

  constructor(private bs: BancomatService) {

  }

  deposita() {
    this.bs.deposita(this.importo);
    this.importo = 0;
  }
}
