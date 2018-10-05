import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../todo-item/todo-item';
import { AppService } from '../app.service';
import { ManageFilterService } from './manage-filter.service';

@Component( {
  selector:    'app-manage',
  templateUrl: './manage.component.html',
  styleUrls:   [ './manage.component.scss' ]
} )
export class CreateItemComponent implements OnInit {
  public description = '';
  public title = '';

  constructor( public appService: AppService, public filterService: ManageFilterService ) {
  }

  ngOnInit() {
  }

  createItem( form, event ) {
    const val = form.value;
    const item = new TodoItem( 1, val.title, val.description );
    this.appService.addElement( item );
    this.description = '';
    this.title = '';
  }

  filterByTitle( event ) {
    this.filterService.filterBy( 'title', event.target.value )
    // this.appService.filterBy.title( event.target.value );
  }
  filterByDate( event ) {
    this.filterService.filterBy( 'date', event.target.value )
    // this.appService.filterBy.title( event.target.value );
  }
}
