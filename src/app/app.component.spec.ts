// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
// import { AppComponent } from './app.component';
// describe('AppComponent', () => {
//   let comp: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AppComponent ],
//     });

//     fixture = TestBed.createComponent(AppComponent);
//     comp = fixture.componentInstance;
//     de = fixture.debugElement.query(By.css('h1'));
//     el = de.nativeElement;
//   });

//   it('should display orginal title', () => {
//     fixture.detectChanges();
//     expect(el.textContent).toContain(comp.title);
//   });
// });


import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    expect(comp.title).toEqual('app works!');
  }));

  it('should display orginal title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });
});
