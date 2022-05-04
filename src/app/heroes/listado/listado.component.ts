import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes:string[] = ['Hulk','Thor','Spiderman','Gokú','Tronks'];
  heroeBorrado:string[] = [];
  seHaBorrado:boolean = false;

  borrarHeroe():void{
    this.heroeBorrado = this.heroes.splice(0,1);
    this.seHaBorrado = true;
  }
}
