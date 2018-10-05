import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TodoItem } from './todo-item/todo-item';

@Injectable( {
  providedIn: 'root'
} )
export class AppService {
  public todoArr = [];
  public _todos = [];
  private itemsPerPage = 12;
  public page = 0;

  constructor( public http: HttpClient ) {
  }

  getData() {
    return this.http.get( '/assets/data.json' ).pipe( map( response => {
      this._todos = this.mapJSON( response );
      this._paginate( this._todos );
    } ) );
  }

  private mapJSON( json ) {
    return json.map( el => {
      return new TodoItem( el.id, el.title, el.description, el.created_at );
    } );
  }

  public _paginate( arr ) {
    const pages = Math.ceil( arr.length / this.itemsPerPage );
    this.todoArr = [];
    let k = 0;
    for ( let i = 0; i < pages; i++ ) {
      this.todoArr[ i ] = [];
      for ( k; k < (i + 1) * this.itemsPerPage; k++ ) {
        if ( !arr[ k ] ) {
          break;
        }
        this.todoArr[ i ].push( arr[ k ] );
      }
    }
    console.log( this.todoArr )
  }

  public addElement( el ) {
    this._todos.push( el );
    this._paginate( this._todos );
  }

  public removeElement( index ) {
    const i = (this.page + 1) * index;
    this._todos.splice( i, 1 );
    this._paginate( this._todos );
  }
}
