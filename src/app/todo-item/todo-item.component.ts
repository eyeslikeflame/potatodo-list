import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AppService } from '../app.service';

@Component( {
  selector:    'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls:   [ './todo-item.component.scss' ]
} )
export class TodoItemComponent implements OnInit {
  @Input() item;
  @Input() index;
  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor( public appService: AppService ) {
  }

  removeItem( event ): void {
    event.stopPropagation();
    this.appService.removeElement( this.index );
  }

  editItem( event ): void {
    event.stopPropagation();
    this.edit.emit( {
      item: this.item,
      index: this.index
    } );
  }

  ngOnInit() {
  }

}
