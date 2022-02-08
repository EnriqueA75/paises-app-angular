import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = []
  
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private paisService: PaisService) { }

  buscar(){
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        this.paises = paises;
        this.hayError = false;
        console.log(this.paises)
      }, (error) => {
        this.hayError = true;
        this.paises = [];
      })
  }
}