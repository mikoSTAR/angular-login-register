import { UserService } from './../../_services/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';
import { AlertComponent } from './alert.component';
import { AlertService } from './../../_services/alert.service';

fdescribe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let de: DebugElement;
  // const el: HTMLElement;

  class AlertServiceStub {
    getMessage() {}
  }

  class RouterStub {
    events = {};
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      providers: [
        {provide: AlertService, useClass: AlertServiceStub},
        {provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    // alertService = fixsture.debugElement.injector.get(AlertService);
    // alertService = TestBed.get(AlertService);
    // router = fixture.debugElement.injector.get(Router);
    // router = TestBed.get(Router);

    // de = fixture.debugElement.query(By.css('.alert'));
    // el = de.nativeElement;
    // fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should not have "alert" class', () => {
    de = fixture.debugElement.query(By.css('.alert'));
    // el = de.nativeElement;
    // fixture.detectChanges();
    expect(de).toBeNull;
  });
});
