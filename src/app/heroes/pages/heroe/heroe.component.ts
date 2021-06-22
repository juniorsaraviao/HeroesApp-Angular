import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroe!: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private heroeService: HeroesService,
               private router: Router )
  { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroeService.getHeroesById(id) ) // desestructuración
    )
    .subscribe( heroe => this.heroe = heroe );

  }

  back(): void {
    this.router.navigate(['/heroes/listado']);
  }

}
