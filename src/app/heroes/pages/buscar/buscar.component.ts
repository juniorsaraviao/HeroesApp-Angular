import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroes.interface';
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public termino = '';
  public heroes: Heroe[] = [];
  public heroeSeleccionado: Heroe | undefined;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.heroesService.getHeroesByName( this.termino.trim() )
    .subscribe( res => this.heroes = res );
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent): void{

    if (!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }

    console.log(event);
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroesById( heroe.id! )
    .subscribe(res => this.heroeSeleccionado = res);
  }

}
