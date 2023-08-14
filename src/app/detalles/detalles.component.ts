import { Component,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  constructor(public dialogRef:MatDialogRef<DetallesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}
    close(){
      this.dialogRef.close();
    }
}
