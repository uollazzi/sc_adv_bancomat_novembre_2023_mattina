import { Component, OnInit } from '@angular/core';
import { BancomatService } from '../../services/bancomat.service';
import { Conto } from '../../models/conto';

@Component({
  selector: 'app-estratto-conto',
  templateUrl: './estratto-conto.component.html',
  styleUrl: './estratto-conto.component.css'
})
export class EstrattoContoComponent implements OnInit {
  conto?: Conto;

  constructor(public bs: BancomatService) { }

  ngOnInit(): void {
    this.bs.getConto().subscribe(conto => this.conto = conto);
  }


}
