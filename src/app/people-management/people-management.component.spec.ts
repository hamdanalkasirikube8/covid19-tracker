import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleManagementComponent } from './people-management.component';

describe('PeopleManagementComponent', () => {
  let component: PeopleManagementComponent;
  let fixture: ComponentFixture<PeopleManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
