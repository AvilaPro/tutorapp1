import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyTsComponent } from './sty-ts.component';

describe('StyTsComponent', () => {
  let component: StyTsComponent;
  let fixture: ComponentFixture<StyTsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyTsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
