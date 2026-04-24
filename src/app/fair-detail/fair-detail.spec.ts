import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairDetail } from './fair-detail';

describe('FairDetail', () => {
  let component: FairDetail;
  let fixture: ComponentFixture<FairDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FairDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
