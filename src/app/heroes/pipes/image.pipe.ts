import { Heroe } from './../interfaces/heroes.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( heroe: Heroe ): string {

    if (!heroe.id){

      return 'assets/no-image.png';

    } else {

      return heroe.alt_img ? heroe.alt_img : `assets/heroes/${ heroe.id }.jpg`;

    }

  }

}
