import { Component, OnInit, Renderer2  } from '@angular/core';
import { MatDialog,MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private renderer: Renderer2) {
    this.loggedUser = localStorage.getItem('user') || "" ;
    if (this.loggedUser=="publicidad")
    {
      const newColor = '#5CA47A'; // Define el nuevo color que deseas asignar
      this.renderer.setStyle(document.body, 'background-color', newColor);// Utiliza el Renderer2 para modificar el estilo del body
    }
  }

  ngOnInit() {
    window.addEventListener('popstate', () => {
      // Llama a tu función aquí
      this.changeColor();
    });
  }

  changeColor(){
    this.renderer.setStyle(document.body, 'background-color', "#213F60");
  }

  //Estados
  validUser: boolean = true; //deberá ser falso para evitar que entren directo usando la url
  loggedUser: string = "";
  career: string = 'Publicidad'; //para test

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

      dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openHelpDialog(){
    this.dialog.open(DialogHelpContent);
  }

  closeSesionDialog(){
    this.dialog.open(CloseSession);
  }
 
}

@Component({
  selector: 'Close-Session',
  templateUrl: 'Close-Session.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class CloseSession {

  constructor (private router : Router, private dialogRef: MatDialogRef<CloseSession>, private renderer: Renderer2) {}

  volverColorBody(){
    this.renderer.setStyle(document.body, 'background-color', "#213F60");
  }

  CloseSession(){
    this.volverColorBody();
    this.router.navigateByUrl("/login");
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-help-content',
  templateUrl: 'dialog-help-content.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogHelpContent {}

 @Component({
    selector: 'dialog-content',
    templateUrl: 'dialog-content.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
  })
  export class DialogContent {}
