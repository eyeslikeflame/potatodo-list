import { Injectable } from '@angular/core';

import { AppService } from '../app.service';
import { TodoItem } from '../todo-item/todo-item';

@Injectable( {
  providedIn: 'root'
} )
export class ManageFilterService {
  private _lastValue = {
    title: '',
    date:  0
  };
  private filters = {
    title: ( title, arr ): Array<TodoItem> => {
      this._lastValue.title = title || '';
      return arr.filter( el => el.title.search( title ) !== -1 );
    },
    date:  ( date, arr ): Array<TodoItem> => {
      this._lastValue.date = date || 0;
      return arr.filter( el => new Date( el.created_at ).toString().search( date ) !== -1 );
    }
  };

  constructor( private appService: AppService ) {
  }

  public filterBy( filterName: string, value: any ): void {
    let filtered = this.filters[ filterName ]( value.trim(), this.appService.todos );

    for ( let key in this._lastValue ) {
      if ( this._lastValue[ key ] && key !== filterName ) {
        filtered = this.filters[ key ]( this._lastValue[ key ], filtered );
      }
    }
    this.appService.paginate( filtered );
  }
  public get lastValue() {
    return this._lastValue;
  }
}
