import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { AppService } from '../app.service';
import { TodoItem } from '../todo-item/todo-item';

@Injectable( {
  providedIn: 'root'
} )
export class ManageFilterService {
  private _lastValue = {
    title: '',
    date:  ''
  };
  private filters = {
    title: ( title, arr ): Array<TodoItem> => {
      this._lastValue.title = title || '';
      return arr.filter( el => el.title.search( title ) !== -1 );
    },
    date:  ( date, arr ): Array<TodoItem> => {
      this._lastValue.date = date || 0;
      return arr.filter( el => {
        const dateFormatted = moment( el.created_at ).format( 'YYYY-DD-MM, h:mm A' );
        return dateFormatted.search( date ) !== -1;
      } );
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
