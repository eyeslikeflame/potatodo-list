import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component( {
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {
  public edit = null;

  constructor( public appService: AppService ) {
  }

  ngOnInit() {
    this.appService.getData().subscribe();
  }

  public editInit( event ): void {
    this.edit = event;
  }

  public editClose(): void {
    this.edit = null;
  }

  public editSave( event ): void {
    this.appService.saveEdit( event, this.edit.index );
    this.editClose();
  }
}
