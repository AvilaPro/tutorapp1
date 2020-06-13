import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarRefComponent } from './var-ref.component';

describe('VarRefComponent', () => {
  let component: VarRefComponent;
  let fixture: ComponentFixture<VarRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
