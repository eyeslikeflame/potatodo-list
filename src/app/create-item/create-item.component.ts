import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../todo-item/todo-item';
import { AppService } from '../app.service';

@Component( {
  selector:    'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls:   [ './create-item.component.scss' ]
} )
export class CreateItemComponent implements OnInit {
  public description = '';
  public title = '';

  constructor( public appService: AppService ) {
  }

  ngOnInit() {
  }

  createItem( form, event ) {
    const val = form.value;
    const item = new TodoItem( 1, val.title, val.description );
    this.appService.addElement(item);
    this.description = '';
    this.title = '';
  }

  filterByTitle( event ) {
    this.appService.filterBy.title( event.target.value );
  }
}
