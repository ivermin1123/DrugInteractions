import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DrugService } from '../../services/drug.service';
import { TuongTacService } from '../../services/tuong-tac.service';
import { HoatChatService } from '../../services/hoat-chat.service';
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
  isHoatChat = false;
  isDrug = false;
  isTuongTac = false;
  nameActive = 'drug';
  private gridApi;
  private gridColumnApi;

  constructor(
    private drugService: DrugService,
    private hoatChatService: HoatChatService,
    private tuongTacService: TuongTacService
  ) {
    this.defaultColDef = { resizable: true, cellStyle: { 'text-align': "center" } };

    this.frameworkComponents = {
      btnCellRenderer: BtnCellRenderer
    }
  }

  ngOnInit(): void {
    this.loadDataGrid('drug');
  }

  onFirstDataRendered(params) {
    console.log(this.gridApi);
    this.gridApi = params.api;
    console.log(this.gridApi);
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

  public onQuickFilterChanged($event: any) {
    this.gridApi.setQuickFilter($event.target.value);
  }

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }

  onBtnActive(name) {
    if (name !== this.nameActive) {
      if (name === 'drug') {
        this.isDrug = true;
        this.isHoatChat = false;
        this.isTuongTac = false;
        this.nameActive = name;
      }
      else if (name === 'hoatChat') {
        this.isDrug = false;
        this.isHoatChat = true;
        this.isTuongTac = false;
        this.nameActive = name;
      } else {
        this.isDrug = false;
        this.isHoatChat = false;
        this.isTuongTac = true;
        this.nameActive = name;
      }
      this.loadDataGrid(name);
      this.gridApi.sizeColumnsToFit();
    }
  }

  loadDataGrid(name) {
    if (name === 'drug') {
      //Set column Header
      this.columnDefs = [
        { headerName: 'Số đăng ký', field: 'idThuoc', sortable: true, filter: true, suppressSizeToFit: true },
        { headerName: 'Tên Thuốc', field: 'tenThuoc', sortable: true, filter: true },
        { headerName: 'Phân loại', field: 'phanLoai', sortable: true, filter: true },
        // { headerName: 'Nồng độ', field: 'nongDo', sortable: true, filter: true },
        { headerName: 'Dạng bào chế', field: 'dangBaoChe', sortable: true, filter: true },
        { headerName: 'QCĐG', field: 'qcDongGoi', sortable: true, filter: true },
        { headerName: 'HSD', field: 'HSD', sortable: true, filter: true },
        {
          field: 'idThuoc',
          headerName: 'Chi tiết',
          cellStyle: { 'text-align': "center" },
          cellRenderer: 'btnCellRenderer',
          cellRendererParams: {
            clicked: (field: any) => {
              alert(`${field} was clicked`);
            }
          },
          minWidth: 150,
        }
      ];
      //Get data for grid
      this.drugService.getAll()
        .subscribe(
          data => {
            this.rowData = data;
          },
          error => {
            console.log(error);
          });
    } else if (name === 'hoatChat') {
      //Set column Header
      this.columnDefs = [
        { headerName: 'Mã hoạt chất', field: 'idHoatchat', sortable: true, filter: true, suppressSizeToFit: true },
        { headerName: 'Tên Hoạt Chất', field: 'tenHoatChat', sortable: true, filter: true },
        {
          field: 'idHoatchat',
          headerName: 'Chi tiết',
          cellStyle: { 'text-align': "center" },
          cellRenderer: 'btnCellRenderer',
          cellRendererParams: {
            clicked: (field: any) => {
              alert(`${field} was clicked`);
            }
          },
          minWidth: 150,
        }
      ];
      //Get data for grid
      this.hoatChatService.getAll()
        .subscribe(
          data => {
            this.rowData = data;
          },
          error => {
            console.log(error);
          });
    } else {
      //Set column Header
      this.columnDefs = [
        { headerName: 'Hoạt chất 1', field: 'idHc', sortable: true, filter: true, suppressSizeToFit: true },
        { headerName: 'Hoạt chất 2', field: 'idHcTuongTac', sortable: true, filter: true, suppressSizeToFit: true },
        { headerName: 'Mức độ', field: 'mucDo', sortable: true, filter: true },
        { headerName: 'Nội dung', field: 'noiDung', sortable: true, filter: true },
        {
          field: 'idTuongTac',
          headerName: 'Chi tiết',
          cellStyle: { 'text-align': "center" },
          cellRenderer: 'btnCellRenderer',
          cellRendererParams: {
            clicked: (field: any) => {
              alert(`${field} was clicked`);
            }
          },
          minWidth: 150,
        }
      ];
      this.tuongTacService.getAll()
        .subscribe(
          data => {
            this.rowData = data;
          },
          error => {
            console.log(error);
          });
    }
  }

  autoSizeAll(skipHeader) {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

}

