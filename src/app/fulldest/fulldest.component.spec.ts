import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulldestComponent } from './fulldest.component';

describe('FulldestComponent', () => {
  let component: FulldestComponent;
  let fixture: ComponentFixture<FulldestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulldestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulldestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
