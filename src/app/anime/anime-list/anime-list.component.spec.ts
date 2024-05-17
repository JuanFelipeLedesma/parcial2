/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarAnimesComponent } from './anime-list.component';

describe('ListarAnimesComponent', () => {
  let component: ListarAnimesComponent;
  let fixture: ComponentFixture<ListarAnimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAnimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
