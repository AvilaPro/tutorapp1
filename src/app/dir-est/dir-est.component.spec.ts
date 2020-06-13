import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirEstComponent } from './dir-est.component';

describe('DirEstComponent', () => {
  let component: DirEstComponent;
  let fixture: ComponentFixture<DirEstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirEstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
