import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TodoItem } from './todo-item/todo-item';

@Injectable( {
  providedIn: 'root'
} )
export class AppService {
  public todoArr = [];

  constructor( public http: HttpClient ) {
  }

  getData() {
    return this.http.get( '/assets/data.json' ).pipe( map( response => {
      this.todoArr = this.mapJSON( response );
    } ) );
  }

  private mapJSON( json ) {
    return json.map( el => {
      return new TodoItem(el.id, el.title, el.description, el.created_at);
    });
  }
}
