import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Meetings } from '../classes-interfaces/meetings';
import { Person } from '../classes-interfaces/person';
import { PersonManagementService } from '../services/person-management.service';

@Component({
  selector: 'all-meetings-view',
  templateUrl: './all-meetings-view.component.html',
  styleUrls: ['./all-meetings-view.component.css']
})
export class AllMeetingsViewComponent implements OnInit {
  displayPersonTable: boolean;

  @Input() meetingsArray: Array<Meetings>;
  @Input() personName;
  datasource = new MatTableDataSource();
  tableColumns: string[] = ['date', 'time', 'location'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator; // For pagination
  @ViewChild(MatSort, { static: false }) sort: MatSort; // For Sort

  constructor(private personManagementService: PersonManagementService) { }

  ngOnInit(): void {
    this.displayPersonTable = false;
    this.datasource.data = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkMeetingsArray();
    this.datasource.paginator = this.paginator; // For pagination
    this.datasource.sort = this.sort; // For sort
  }

  checkMeetingsArray() {
    if (this.meetingsArray && this.meetingsArray.length > 0) {
      this.datasource.data = this.meetingsArray;
      this.displayPersonTable = true;
      return;
    }
    this.displayPersonTable = false;
  }



}
