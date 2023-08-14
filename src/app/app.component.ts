import { Component,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_amaranto';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  close (){
    this.sidenav.close();
  }
}
