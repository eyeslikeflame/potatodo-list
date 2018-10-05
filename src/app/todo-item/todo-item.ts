export class TodoItem {
  constructor( private _id: number,
               private _title: string,
               private _description: string,
               private _created_at: number = Date.now() ) {
    this.title = _title;
    this.description = _description;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get created_at(): number {
    return this._created_at;
  }

  set title( title ) {
    this._title = this.trimStr( title, 24 );
  }

  set description( description ) {
    this._description = this.trimStr( description, 200 );
  }

  private trimStr( str, length ): string {
    let ellipsis = '';
    str = str.trim();
    if ( str.length > 200 ) {
      ellipsis = '...';
    }
    return str.substr( 0, length ) + ellipsis;
  }
}
