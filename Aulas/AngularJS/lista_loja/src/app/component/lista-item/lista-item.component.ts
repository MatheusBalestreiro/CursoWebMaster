import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.css']
})
export class ListaItemComponent implements OnInit {

  @Input() lista:Lista;
  @Output() deleteLista: EventEmitter<Lista> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    
  	let classes = {
  		lista: true,
  		'completo':this.lista.completed
  	}
  	return classes;
  }

  onToggle(todo){
  	todo.completed = !todo.completed;
  }

  onDelete(todo){
  	this.deleteLista.emit(todo);
  }

}
