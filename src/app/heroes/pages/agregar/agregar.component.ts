import { ConfirmarComponent } from './../../components/confirmar/confirmar.component';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { iif } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  public heroe: Heroe = {
    superhero:        '',
    alter_ego:        '',
    characters:       '',
    first_appearance: '',
    publisher:        Publisher.DCComics,
    alt_img:          ''
  };

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               private dialog: MatDialog ) { }

  ngOnInit(): void {

    if ( this.router.url.includes('editar') ){
      this.activatedRoute.params
      .pipe( switchMap( ({id}) => this.heroesService.getHeroesById( id )) )
      .subscribe( heroe => this.heroe = heroe);
    }

  }

  guardar(): void {

    if ( this.heroe.superhero.trim().length === 0 ) {
      return;
    }

    if ( this.heroe.id ){

      this.heroesService.actualizarHeroe( this.heroe )
      .subscribe( res => {
        this.heroe = res;
        this.mostrarSnackBar('Héroe Actualizado');
      });

    }else{

      this.heroesService.agregarHeroe( this.heroe )
      .subscribe( res => {
        this.router.navigate(['/heroes/editar', res.id]);
        this.mostrarSnackBar('Héroe Agregado');
      } );

    }
  }

  borrar(): void {

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: {...this.heroe} // se puede enviar this.heroe si estas seguro de que no se modificará en el otro component
    });

    // dialog.afterClosed().subscribe( result => {
    //   if ( result ) {
    //     this.heroesService.borrarHeroe(this.heroe)
    //     .subscribe( res => {
    //       this.router.navigate(['/heroes']);
    //       this.mostrarSnackBar('Héroe Borrado');
    //     });
    //   }
    // });

    dialog.afterClosed()
    .pipe(
      switchMap((value) => {
        return iif(() => value, this.heroesService.borrarHeroe(this.heroe));
      })
    )
    .subscribe(res => {
      this.router.navigate(['/heroes']);
      this.mostrarSnackBar('Héroe Borrado');
    });

  }

  mostrarSnackBar( mensaje: string ): void {
    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });
  }

}
