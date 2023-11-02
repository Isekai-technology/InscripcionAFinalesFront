import { AfterViewInit, Component, OnInit, Renderer2  } from '@angular/core';
import { MatDialog,MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { CardsDataComponent } from './content-register/cards-data/cards-data.component';
import { LoginService } from 'src/app/services/login-service/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, AfterViewInit {
  
  //Estados
  validUser: boolean = true; //deberá ser falso para evitar que entren directo usando la url
  carreraUsuario: string = "";
  usuario: string = "";

  selectedDate: Date | null = new Date(2023, 7, 28) ;

  //Filtro de fechas, mas adelante implementar en base a las fechas en las tarjetas
  minDate= new Date();
  maxDate= new Date(2023, 7, 28);

  availableExamDates: Array<ExamDate> = new Array<ExamDate>(
    new ExamDate("Analisis Matematico I", new Date(2023, 7, 21), new Date(2023, 7, 17)),
    new ExamDate("Algebra", new Date(2023, 7, 22), new Date(2023, 7, 18)),
    new ExamDate("Ingenieria Informatica I", new Date(2023, 7, 24), new Date(2023, 7, 22)),
    new ExamDate("Ingles I", new Date(2023, 7, 25), new Date(2023, 7, 23)),
  );
  
  registeredExamDates: Array<ExamDate> = new Array<ExamDate>(
    new ExamDate("Practicas Profesionalizantes I", new Date(2023, 7, 21), new Date(2023, 7, 17)),
    new ExamDate("Sistemas y Organizaciones", new Date(2023, 7, 22), new Date(2023, 7, 18)),
    new ExamDate("Algoritmos I", new Date(2023, 7, 24), new Date(2023, 7, 22))
  );

  AcademicHistorial: Array<SubjectComplete> = new Array<SubjectComplete>(
    new SubjectComplete("Ingles I","9809"),
    new SubjectComplete("Algoritmos I","9809"),
    new SubjectComplete("Sistemas y orgaizaciones I","9809"),
  );

  

  constructor(public dialog: MatDialog, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.usuario = localStorage.getItem('usuario') || "";
    this.carreraUsuario = localStorage.getItem('carrera') || "" ;
    if (this.carreraUsuario=="publicidad")
    {
      const imageUrl = '../../../assets/imgs/LOGO_PUBLI.png';
      const logoElement = document.querySelector('.logo-container') as HTMLImageElement;
      logoElement.src = imageUrl;
      this.renderer.setStyle(document.body, 'background-color', '#5CA47A');
    }
    else
    {
      const imageUrl = '../../../assets/imgs/LOGO_AS.png';
      const logoElement = document.querySelector('.logo-container') as HTMLImageElement;
      logoElement.src = imageUrl;
      const newColor = 'white';
      const elements = [
        '.contact-data',
        '.copyright',
        '.nombre-usuario',
        '.titulo',
        '.help-button',
        'a',
        '.calendary',
      ];
      elements.forEach(className => {
        const element = document.querySelector(className);
        if (element) {
          if (className === '.help-button') {
            this.renderer.setStyle(element, 'background-color', '#213F60');
          } else if (className == '.calendary')
          {
            this.renderer.setStyle(element, 'border-color', '#213F60');
          }else
          {
            this.renderer.setStyle(element, 'color', newColor);
          }

        }
      });
    }
  }

  ngOnInit() {
    window.addEventListener('popstate', () => {
      this.changeColor();
    });
  }

  changeColor(){
    this.renderer.setStyle(document.body, 'background-color', "#213F60");
  }

  openDialog() {
    const dialogRef = this.dialog.open(CardsDataComponent);

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

  constructor (private router : Router, private dialogRef: MatDialogRef<CloseSession>, private renderer: Renderer2, private _logSer: LoginService) {}

  volverColorBody(){
    this.renderer.setStyle(document.body, 'background-color', "#213F60");
  }

  CloseSession(){
    this.volverColorBody();
    this.router.navigateByUrl("/login");
    this.dialogRef.close();
    this._logSer.logout();
  }
}

@Component({
  selector: 'dialog-help-content',
  templateUrl: 'dialog-help-content.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogHelpContent {}

  //Placeholder para las mesas, DEBERIA SER UNA CLASE EXTERNA
export class ExamDate {
  subject: string;
  date: Date;
  limitInscriptionDate: Date; // El ultimo dia que te podes inscribir a la mesa

  constructor (subject: string, date: Date, limitDate: Date){
    this.subject= subject;
    this.date= date;
    this.limitInscriptionDate= limitDate;
  }

}
export class SubjectComplete{
  subject:string;
  plan:string;

  constructor(subject:string , plan:string){
    this.subject=subject;
    this.plan=plan;
  }
}