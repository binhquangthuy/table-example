import { Component, Input } from '@angular/core';

@Component({
  template: '',
})
export abstract class UiBase {
  @Input() public styleClass!: string;
  @Input() public componentId!: string;
  @Input() public ngModel: any;
  @Input() public disabled!: boolean;
}

export interface TableElement {
  id: string;
  title: string;
  renderRow: (element: any) => {};
}
