import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from 'src/app/services/registroservice.service';


interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})


export class InicioPage implements OnInit {
  nombre = localStorage.getItem("nomUsuario")
  correo = localStorage.getItem("correo")


  constructor(private menuController: MenuController) {}
  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}

