import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMeetingsViewComponent } from './all-meetings-view.component';

describe('AllMeetingsViewComponent', () => {
  let component: AllMeetingsViewComponent;
  let fixture: ComponentFixture<AllMeetingsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMeetingsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMeetingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
