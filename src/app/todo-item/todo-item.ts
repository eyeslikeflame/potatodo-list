export class TodoItem {
  private id: number;
  private created_at: number;

  constructor( public title: string,
               public description: string ) {
    this.title = this.trimStr( title, 24 ) || 'Untitled';
    this.description = this.trimStr( description, 200 ) || '';
    this.created_at = Date.now();
  }

  get getId() {
    return this.id;
  }

  get getCreatedAt() {
    return this.created_at;
  }

  private trimStr( str, length ) {
    let ellipsis = '';
    str = str.trim();
    if ( str.length > 200 ) {
      ellipsis = '...';
    }
    return str.substr( 0, length ) + ellipsis;
  }
}
