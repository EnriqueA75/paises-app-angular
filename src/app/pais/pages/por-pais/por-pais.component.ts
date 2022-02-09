import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [ `
    li {
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;
  
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private paisService: PaisService) { }

  buscar( termino: string ){
    console.log(this.termino);
    this.termino = termino;
    this.mostrarSugerencias = false;
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
  sugerencias( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
      .subscribe(paises => {
        this.paisesSugeridos = paises.splice(0,5);
      }, (error => {
        this.paisesSugeridos = [];
      }))
  }
  buscarSugerido(termino: string) {
    this.buscar(termino);
  }

}
