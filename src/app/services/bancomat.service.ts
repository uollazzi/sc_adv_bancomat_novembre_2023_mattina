import { Injectable } from '@angular/core';
import { Observable, concatMap, of, switchMap } from 'rxjs';
import { Conto } from '../models/conto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BancomatService {
  // saldo = 2000;

  constructor(private http: HttpClient) { }

  getConto() {
    return this.http.get<Conto>("http://localhost:3000/conti/1");
  }

  preleva(importo: number) {
    // if (importo > this.saldo) {
    //   return "Impossibile prelevare più del saldo.";
    // }

    // this.saldo -= importo;
    // return `Prelievo di ${importo} avvenuto con successo. Nuovo saldo: ${this.saldo}`;

    // this.http.get<Conto>("http://localhost:3000/conti/1")
    //   .subscribe(conto => {
    //     if (importo <= conto.saldo) {
    //       this.http.patch<Conto>("http://localhost:3000/conti/1", { saldo: conto.saldo - importo })
    //         .subscribe(conto => console.log(conto));
    //     }
    //   });

    return this.http.get<Conto>("http://localhost:3000/conti/1")
      .pipe(
        concatMap(conto => {
          if (importo <= conto.saldo) {
            return this.http.patch<Conto>("http://localhost:3000/conti/1", { saldo: conto.saldo + importo });
          }

          return of("Errore");
        })
      )
  }

  deposita(importo: number) {

    // this.saldo += importo;
    // return `Deposito di ${importo} avvenuto con successo. Nuovo saldo: ${this.saldo}`

    // this.http.get<Conto>("http://localhost:3000/conti/1")
    //   .subscribe(conto => {
    //     this.http.patch<Conto>("http://localhost:3000/conti/1", { saldo: conto.saldo + importo })
    //       .subscribe(conto => console.log(conto));
    //   });

    return this.http.get<Conto>("http://localhost:3000/conti/1")
      .pipe(
        concatMap(conto => this.http.patch<Conto>("http://localhost:3000/conti/1", { saldo: conto.saldo + importo }))
      )
  }
}
