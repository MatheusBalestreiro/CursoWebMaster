import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  title:string = 'Lista Loja';

  constructor(){
  		this.trocarTitulo('Titulo novo!');
  }

  trocarTitulo(title:string):void{
  		console.log("Chamando método!");
  		this.title = title;
  }

 

}


