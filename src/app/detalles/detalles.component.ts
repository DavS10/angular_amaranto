import { Component,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ave } from '../classes/ave.class';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  constructor(public dialogRef:MatDialogRef<DetallesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ave){}
    close(){
      this.dialogRef.close("Se canceló :(");
    }
}
