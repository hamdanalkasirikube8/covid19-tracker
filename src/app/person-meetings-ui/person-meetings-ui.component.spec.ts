import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMeetingsUIComponent } from './person-meetings-ui.component';

describe('PersonMeetingsUIComponent', () => {
  let component: PersonMeetingsUIComponent;
  let fixture: ComponentFixture<PersonMeetingsUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonMeetingsUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonMeetingsUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
