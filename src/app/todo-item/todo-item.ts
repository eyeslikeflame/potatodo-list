export class TodoItem {
  constructor(
              private id: number,
              public title: string,
              public description: string,
              private created_at: number = Date.now()) {
    this.title = this.trimStr( title, 24 );
    this.description = this.trimStr( description, 200 );
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
