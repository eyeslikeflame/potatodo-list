import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TodoItem } from './todo-item/todo-item';

@Injectable( {
  providedIn: 'root'
} )
export class AppService {
  public todoArr = [];
  private todos = [];
  private itemsPerPage = 12;
  public page = 0;
  public filterBy = {
    title: ( title ) => {
      const arr = this.todos.filter( el => el.title.search( title ) !== -1 );
    },
    date:  ( date ) => {

    }
  };

  constructor( public http: HttpClient ) {
  }

  getData() {
    return this.http.get( '/assets/data.json' ).pipe( map( response => {
      this.todos = this.mapJSON( response );
      this.paginate( this.todos );
    } ) );
  }

  private mapJSON( json ) {
    return json.map( el => {
      return new TodoItem( el.id, el.title, el.description, el.created_at );
    } );
  }

  private paginate( arr ) {
    const pages = Math.ceil( arr.length / this.itemsPerPage );
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
  }

  public addElement( el ) {
    this.todos.push( el );
    this.paginate( this.todos );
    console.log( this.todoArr );
  }

  public removeElement( index ) {
    const i = (this.page + 1) * index;
    this.todos.splice( i, 1 );
    this.paginate( this.todos );
  }

  // public editElement( )
}
