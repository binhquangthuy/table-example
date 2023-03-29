import { TableElement } from './../ui-base';
import {   Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output } from "@angular/core";
import { PageEvent } from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections'

@Component({
  selector: 'pc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  /** provide data to show */
  @Input() dataSource: Array<any> = [
    {dateFrom: 'date1', dateTo: 'date2', cashMoney: 100, cardMoney: 200, total: 300},
    {dateFrom: 'date1', dateTo: 'date2', cashMoney: 100, cardMoney: 200, total: 300},
    {dateFrom: 'date1', dateTo: 'date2', cashMoney: 100, cardMoney: 200, total: 300},
    {dateFrom: 'date1', dateTo: 'date2', cashMoney: 100, cardMoney: 200, total: 300},
    {dateFrom: 'date1', dateTo: 'date2', cashMoney: 100, cardMoney: 200, total: 300},
  ];
  /** define how to display each column in dataSource */
  @Input() columns: Array<TableElement> = [
      {
        id: 'order_number',
        title: 'order_number',
        renderRow: (element: any) => ``,
      },
      {
        id: 'dateFrom',
        title: 'dateFrom',
        renderRow: (element: any) => `${element.dateFrom}`,
      },
      {
        id: 'dateTo',
        title: 'dateTo',
        renderRow: (element: any) => `${element.dateTo}`,
      },
      {
        id: 'cashMoney',
        title: 'cashMoney',
        renderRow: (element: any) => `${element.cashMoney}`,
      },
      {
        id: 'cardMoney',
        title: 'cardMoney',
        renderRow: (element: any) => `${element.cardMoney}`,
      },
      {
        id: 'totalMoney',
        title: 'totalMoney',
        renderRow: (element: any) => `${element.totalMoney}`,
      },
      {
        id: 'action',
        title: 'action',
        renderRow: (index: any) =>
          `
        <div class="table-action">
        <span class="material-icons" id="editModel${index}">edit</span>
        <span class="material-icons" id="deleteModel${index}">delete</span>
        </div>
        `,
      }
  ];
  //show column by columns input
  // displayedColumns: any = ['order_number', 'dateFrom', 'dateTo', 'cashMoney', 'cardMoney', 'totalMoney', 'action'];
  displayedColumns: any = [];

  @Input() total: number = 50;
  @Input() pageSize: number = 1;
  @Input() pageIndex: number = 0;
  @Input() pageSizeOptions: Array<number> = [5, 10, 25];
  @Input() hidePageSize: boolean = false;
  @Input() showPageSizeOptions: boolean = true;
  @Input() showFirstLastButtons: boolean = true;
  @Input() disabled: boolean = false;
  @Output() change = new EventEmitter<PageEvent>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.columns)
    this.displayedColumns = (this.columns || []).map((c: TableElement) => c.id);
  }

  /**
   * handle paging event
   *
   * @param pageEvent
   * @author NamHVS01
   * @version 1.0
   * @since 03/01/2023
   */
  handlePageEvent(e: PageEvent) {
    this.change.emit(e);
  }

}


