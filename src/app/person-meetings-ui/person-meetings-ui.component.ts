import { PersonManagementService } from './../services/person-management.service';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { Person } from '../classes-interfaces/person';
import { Meetings } from '../classes-interfaces/meetings';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { IndividualMeetings } from '../classes-interfaces/individualMeetings';

@Component({
  selector: 'person-meetings-ui',
  templateUrl: './person-meetings-ui.component.html',
  styleUrls: ['./person-meetings-ui.component.css']
})

export class PersonMeetingsUIComponent implements OnInit {

  personTableDataSource: IndividualMeetings[] = [];
  searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  tableColumns: string[] = ['no', 'name', 'date', 'time', 'location'];

  datasource = new MatTableDataSource();

  selection = new SelectionModel<Object>(false, []);
  displayPersonTable: boolean;
  recentMeetings: boolean;

  //pass meeting information and person name to all meetings component
  meetings;
  fullname;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator; // For pagination
  @ViewChild(MatSort, { static: false }) sort: MatSort; // For Sort


  constructor(private personManagementService: PersonManagementService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.datasource.data = [];
    this.loadRecentMeetingsDetails();
    this.searchTerm$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map((searchTerm) => {
        return this.personTableDataSource.filter(o => o.name.match(`.*${searchTerm}.*`))
      })
    ).subscribe(matches => {
      this.datasource.data = matches;
    });

  }

  ngAfterViewInit(): void {
    this.datasource.paginator = this.paginator; // For pagination
    this.datasource.sort = this.sort; // For sort
  }

  onSearch(e): void {
    this.meetings = [];
    this.fullname = '';
    this.searchTerm$.next(e.target.value);
  }

  loadRecentMeetingsDetails() {
    this.recentMeetings = false;
    let personDetails: Array<Person> = [];
    let lastMeeting: Meetings;
    this.personTableDataSource = [];

    //Get information of contacted persons.
    personDetails = this.personManagementService.getPerson();

    for (let i in personDetails) {
      let id = personDetails[i].id;
      let name = `${personDetails[i].firstname} ${personDetails[i].lastname} `
      let meetings = personDetails[i].meetings;
      //Sort meetings by date
      let sortMeetingsByDate = meetings.sort(function (a, b) { return +new Date(a.date) - +new Date(b.date); });

      //Get last meeting based on date
      lastMeeting = sortMeetingsByDate.slice(-1).pop()
      this.personTableDataSource.push(new IndividualMeetings(id, name, lastMeeting.date, lastMeeting.time, lastMeeting.location))
    }

    this.datasource.data = this.personTableDataSource;
    if (this.personTableDataSource.length > 0) {
      this.recentMeetings = true;
    }

  }

  rowClicked(row) {
    let id = row.id;
    this.displayMeetingsPerPerson(id)
  }

  displayMeetingsPerPerson(identifier) {
    //Get all meetings information of selected persons.
    let personDetails: Array<Person> = [];
    personDetails = this.personManagementService.getPerson();
    if (personDetails.length > 0) {
      this.displayPersonTable = true;
      personDetails.find(o => {
        if (o.id == identifier) {
          this.fullname = `${o.firstname} ${o.lastname}`;
          let meetings: Array<Meetings> = o.meetings;
          this.meetings = meetings;
        }
      });
    }
  }




}
