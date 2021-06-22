import { Heroe } from './../../interfaces/heroes.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
               @Inject(MAT_DIALOG_DATA) public heroe: Heroe ) { }

  ngOnInit(): void {
  }

  borrar(): void {
    this.dialogRef.close(true);
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
