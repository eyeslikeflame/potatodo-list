import { Component, OnInit, Input, Output } from '@angular/core';

import { TodoItem } from './todo-item';

@Component( {
  selector:    'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls:   [ './todo-item.component.scss' ]
} )
export class TodoItemComponent implements OnInit {
  @Input() item;
  @Input() index;

  constructor() {
  }

  remove( event ) {
    event.stopPropagation();
    console.log( 'remove' )
  }

  edit( event ) {
    event.stopPropagation();
    console.log( 'edit' )
  }

  ngOnInit() {
  }

}
