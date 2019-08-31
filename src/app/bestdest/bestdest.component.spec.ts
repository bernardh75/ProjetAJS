import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestdestComponent } from './bestdest.component';

describe('BestdestComponent', () => {
  let component: BestdestComponent;
  let fixture: ComponentFixture<BestdestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestdestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestdestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
