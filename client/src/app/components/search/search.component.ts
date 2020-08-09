import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DrugService } from '../../services/drug.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  columnDefs = [
    { headerName:'Mã Thuốc', field: 'idThuoc' },
    { headerName:'Tên Thuốc', field: 'tenThuoc'}
  ]

  rowData: any;

  constructor(private drugService: DrugService) {}

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

}
