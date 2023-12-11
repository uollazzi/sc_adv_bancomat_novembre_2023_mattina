import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancomatService {
  saldo = 2000;

  constructor() { }

  preleva(importo: number): string {
    if (importo > this.saldo) {
      return "Impossibile prelevare più del saldo.";
    }

    this.saldo -= importo;
    return `Prelievo di ${importo} avvenuto con successo. Nuovo saldo: ${this.saldo}`;
  }

  deposita(importo: number): string {
    this.saldo += importo;
    return `Deposito di ${importo} avvenuto con successo. Nuovo saldo: ${this.saldo}`
  }
}
