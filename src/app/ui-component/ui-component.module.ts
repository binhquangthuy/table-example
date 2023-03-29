import { MatTableModule } from '@angular/material/table';
import { TableComponent } from "./table/table.component";

import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,

  ],
  exports: [
    TableComponent
  ]
})

export class UiComponentModule {}