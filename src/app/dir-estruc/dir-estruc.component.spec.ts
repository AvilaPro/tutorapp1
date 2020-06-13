import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirEstrucComponent } from './dir-estruc.component';

describe('DirEstrucComponent', () => {
  let component: DirEstrucComponent;
  let fixture: ComponentFixture<DirEstrucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirEstrucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirEstrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
