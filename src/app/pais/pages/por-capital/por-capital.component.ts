import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private paisService: PaisService) { }

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = []
  
  buscar( termino: string ){
    console.log(this.termino);
    this.termino = termino;
    
    this.paisService.buscarPorCapital(this.termino)
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
    //TODO: crear sugerencias
  }

}
