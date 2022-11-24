import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'accessibility-outline',
      name: 'Quienes Somos', 
      redirecTo: '/quienes-somos'
    },
    {
      icon: 'log-in-outline',
      name: 'Login',
      redirecTo: '/login'
    },
    {
      icon: 'person-add-outline',
      name: 'Registro',
      redirecTo: '/registro'
    },
    {
      icon: 'log-out-outline',
      name: 'Logout',
      redirecTo: '/logout'
    },
    {
      icon: 'calendar-number-outline',          
      name: 'Feriados',
      redirecTo: '/feriados'
    },
    {
      icon: 'camera-outline',
      name: 'Camara',
      redirecTo: '/camara'
    },
  ]


}

