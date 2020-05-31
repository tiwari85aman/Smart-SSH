import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { PortForwardFormComponent } from '../port-forward-form/port-forward-form.component';

export interface UserData {
  hostPort: string;
  host: string;
  remoteIp: string;
  remotePort: string;
}

@Component({
  selector: 'app-port-forward',
  templateUrl: './port-forward.component.html',
  styleUrls: ['./port-forward.component.css'],
})
export class PortForwardComponent implements OnInit {
  displayedColumns: string[] = ['hostPort', 'host', 'remoteIp', 'remotePort'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dataService: DataService, public dialog: MatDialog) {
    this.dataService
      .getData('http://localhost:5000/ssh/local-forward')
      .subscribe((data: any[]) => {
        this.dataSource = new MatTableDataSource(data['data']);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngOnInit() {}

  openDialog() {
    this.dialog.open(PortForwardFormComponent);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
