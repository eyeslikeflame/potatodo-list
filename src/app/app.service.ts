import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item/todo-item';

@Injectable( {
  providedIn: 'root'
} )
export class AppService {
  public todoArr = [];

  constructor() {
    const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    this.todoArr.push(new TodoItem('title1', desc));
    this.todoArr.push(new TodoItem('title2', desc));
    this.todoArr.push(new TodoItem('title3', desc));
    this.todoArr.push(new TodoItem('title4', desc));
    this.todoArr.push(new TodoItem('title5', desc));
    this.todoArr.push(new TodoItem('title6', desc));
    this.todoArr.push(new TodoItem('title7', desc));
  }
}
