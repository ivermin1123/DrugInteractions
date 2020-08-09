import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DrugService } from '../../services/drug.service';
import { BtnCellRenderer } from '../btn-cell-renderer/btn-cell-renderer.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  columnDefs;
  defaultColDef;
  rowData: [];
  params: any;
  frameworkComponents;

  constructor(private drugService: DrugService) {
    this.defaultColDef = { resizable: true, cellStyle: { 'text-align': "center"} };

    this.columnDefs = [
    { headerName: 'Số đăng ký', field: 'idThuoc', sortable: true, filter: true, type: 'nonEditableColumn' },
    { headerName: 'Tên Thuốc', field: 'tenThuoc', sortable: true, filter: true },
    { headerName: 'Phân loại', field: 'phanLoai', sortable: true, filter: true },
    // { headerName: 'Nồng độ', field: 'nongDo', sortable: true, filter: true },
    { headerName: 'Dạng bào chế', field: 'dangBaoChe', sortable: true, filter: true },
    { headerName: 'QCĐG', field: 'qcDongGoi', sortable: true, filter: true },
    { headerName: 'HSD', field: 'HSD', sortable: true, filter: true },
    {
      field: 'idThuoc',
      headerName: 'Số đăng ký',
      cellStyle: { 'text-align': "center"},
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: (field: any) => {
          alert(`${field} was clicked`);
        }
      },
      minWidth: 150,
    }
  ];
  this.frameworkComponents = {
    btnCellRenderer: BtnCellRenderer
  }
  }

  ngOnInit(): void {

    this.drugService.getAll()
      .subscribe(
        data => {
          this.rowData = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

}
