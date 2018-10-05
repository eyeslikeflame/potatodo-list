import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TodoItem } from './todo-item/todo-item';
import { Observable } from 'rxjs/index';

@Injectable( {
  providedIn: 'root'
} )
export class AppService {
  public todoArr = [];
  private _todos = [];
  public itemsPerPage = 12;
  public page = 0;

  constructor( public http: HttpClient ) {
  }

  getData(): Observable<any> {
    return this.http.get( '/assets/data.json' ).pipe( map( response => {
      this._todos = this.mapJSON( response );
      this.paginate( this._todos );
    } ) );
  }

  private mapJSON( json ): Array<TodoItem> {
    return json.map( el => {
      return new TodoItem( el.id, el.title, el.description, el.created_at );
    } );
  }

  public paginate( arr ): void {
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
  }

  public addElement( el ): void {
    this._todos.unshift( el );
    this.paginate( this._todos );
  }

  public removeElement( index ): void {
    const i = index + this.page * this.itemsPerPage;
    this._todos.splice( i, 1 );
    this.paginate( this._todos );
  }

  public saveEdit( item, index ) {
    console.log(this.todoArr[this.page][index]);
    this.todoArr[this.page][index].title = item.title;
    this.todoArr[this.page][index].description = item.description;
  }

  public get todos(): Array<TodoItem> {
    return this._todos;
  }
}
