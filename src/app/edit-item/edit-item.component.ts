import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component( {
  selector:    'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls:   [ './edit-item.component.scss' ]
} )
export class EditItemComponent implements OnInit {
  @Input() item;
  @Input() index;
  @Output() editClose: EventEmitter<any> = new EventEmitter();
  @Output() editOutput: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public edit( form, event ): void {
    this.editOutput.emit( form.value );
  }

  public close(): void {
    this.editClose.emit();
  }
}
