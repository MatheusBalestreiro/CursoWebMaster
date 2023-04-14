import { Component, OnInit } from '@angular/core';
import { Lista } from '../../models/Lista';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listas:Lista[];

  constructor() { }

  deleteLista(lista:Lista){
    this.listas = this.listas.filter(t=>t.id !== lista.id);
  }

  ngOnInit() {
  	 this.listas = [
  	 	{
  	 		id:0,
  	 		title:'Titulo 1',
        completed:true
  	 	},
  	 	{
  	 		id:1,
  	 		title: 'Titulo 2',
        completed:false
  	 	},

      {
        id:2,
        title: 'Titulo 3',
        completed:true
      }
  	 ]
  }

  onSubmit(){
    const lista = {
        title: this.titleNovo,
        completed:false
    }

    this.listas.push(lista);
  }

}
