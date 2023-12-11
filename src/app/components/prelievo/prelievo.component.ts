import { Component } from '@angular/core';
import { BancomatService } from '../../services/bancomat.service';

@Component({
  selector: 'app-prelievo',
  templateUrl: './prelievo.component.html',
  styleUrl: './prelievo.component.css'
})
export class PrelievoComponent {
  importo = 0;
  message = "";

  constructor(private bs: BancomatService) { }

  preleva() {
    this.bs.preleva(this.importo);
    this.importo = 0;
  }
}
