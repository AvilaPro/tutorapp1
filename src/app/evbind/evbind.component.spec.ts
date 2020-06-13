import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvbindComponent } from './evbind.component';

describe('EvbindComponent', () => {
  let component: EvbindComponent;
  let fixture: ComponentFixture<EvbindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvbindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
