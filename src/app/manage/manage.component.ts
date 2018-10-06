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
  public toggleCreate = false;
  public toggleFilters = false;
  constructor( public appService: AppService, public filterService: ManageFilterService ) {
  }

  ngOnInit() {
  }

  createItem( form, event ) {
    const val = form.value;
    const item = new TodoItem( 1, val.title, val.description );
    this.appService.addElement( item );
    this.filterService.filterBy('title', this.filterService.lastValue.title);
    this.description = '';
    this.title = '';
  }

  filterByTitle( event ) {
    const val = event.target.value;
    this.filterService.filterBy( 'title', val );
  }
  filterByDate( event ) {
    const val = event.target.value;
    this.filterService.filterBy( 'date', val );
  }
}
