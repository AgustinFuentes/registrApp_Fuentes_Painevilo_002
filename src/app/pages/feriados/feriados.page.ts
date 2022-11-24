import { Component, OnInit } from '@angular/core';
import { FeriadosService } from 'src/app/services/feriados.service';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  getData : any[] = [];

  constructor( public _services: FeriadosService) { 
    this._services.getData<[]>("").subscribe(data => {
      this.getData = data
      console.log(this.getData);
    })
  }

  ngOnInit() {
  }

}
