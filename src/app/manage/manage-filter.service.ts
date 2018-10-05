import { Injectable } from '@angular/core';

import { AppService } from '../app.service';

@Injectable( {
  providedIn: 'root'
} )
export class ManageFilterService {
  private lastValue = {
    title: null,
    date:  null
  };
  private filters = {
    title: ( title, arr ) => {
      this.lastValue.title = title || null;
      return arr.filter( el => el.title.search( title ) !== -1 );
    },
    date:  ( date, arr ) => {
      this.lastValue.date = date || null;
      return arr.filter(el => new Date(el.created_at).toString().search(date) !== -1);
    }
  };

  constructor( private appService: AppService ) {
  }

  public filterBy( filterName: string, value: any ) {
    let filtered = this.filters[ filterName ]( value.trim(), this.appService._todos );

    for ( let key in this.lastValue ) {
      if ( this.lastValue[ key ] && key !== filterName ) {
        filtered = this.filters[ key ]( this.lastValue[key], filtered );
      }
    }
    this.appService._paginate(filtered);
  }
}
