import { Component } from '@angular/core';
import { BancomatService } from '../../services/bancomat.service';

@Component({
  selector: 'app-estratto-conto',
  templateUrl: './estratto-conto.component.html',
  styleUrl: './estratto-conto.component.css'
})
export class EstrattoContoComponent {
  constructor(public bs: BancomatService) { }
}
