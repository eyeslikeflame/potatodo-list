import { Component, OnInit, Input, Output } from '@angular/core';

import { TodoItem } from './todo-item';
import { AppService } from '../app.service';

@Component( {
  selector:    'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls:   [ './todo-item.component.scss' ]
} )
export class TodoItemComponent implements OnInit {
  @Input() item;
  @Input() index;

  constructor( public appService: AppService ) {
  }

  remove( event ) {
    event.stopPropagation();
    this.appService.removeElement( this.index );
    // this.appService.todoArr.remove(index);
    // this.appService.todoArr.splice( this.index, 1 );
  }

  edit( event ) {
    event.stopPropagation();
    this.appService.todoArr[this.index].description = 'kekCheburek';
    this.appService.todoArr[this.index].title = 'mdaa';
  }

  ngOnInit() {
  }

}
