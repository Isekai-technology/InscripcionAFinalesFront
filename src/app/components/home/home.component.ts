import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  //Estados
  validUser: boolean = true; //deberá ser falso para evitar que entren directo usando la url
  loggedUser: User = new User;
  career: string = 'Publicidad'; //para test
  ngOnInit(): void {
     document.documentElement.style.setProperty('--main-bg-color', '#5CA47A');
  }



}
