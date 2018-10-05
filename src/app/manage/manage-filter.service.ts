import { Injectable } from '@angular/core';

import { AppService } from '../app.service';
import { TodoItem } from '../todo-item/todo-item';

@Injectable( {
  providedIn: 'root'
} )
export class ManageFilterService {
  private lastValue = {
    title: null,
    date:  null
  };
  private filters = {
    title: ( title, arr ): Array<TodoItem> => {
      this.lastValue.title = title || null;
      return arr.filter( el => el.title.search( title ) !== -1 );
    },
    date:  ( date, arr ): Array<TodoItem> => {
      this.lastValue.date = date || null;
      return arr.filter( el => new Date( el.created_at ).toString().search( date ) !== -1 );
    }
  };

  constructor( private appService: AppService ) {
  }

  public filterBy( filterName: string, value: any ): void {
    let filtered = this.filters[ filterName ]( value.trim(), this.appService.todos );

    for ( let key in this.lastValue ) {
      if ( this.lastValue[ key ] && key !== filterName ) {
        filtered = this.filters[ key ]( this.lastValue[ key ], filtered );
      }
    }
    this.appService.paginate( filtered );
  }
}
