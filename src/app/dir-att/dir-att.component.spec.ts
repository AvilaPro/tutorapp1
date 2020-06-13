import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirAttComponent } from './dir-att.component';

describe('DirAttComponent', () => {
  let component: DirAttComponent;
  let fixture: ComponentFixture<DirAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirAttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
