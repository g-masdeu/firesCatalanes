import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionFairsList } from './region-fairs-list';

describe('RegionFairsList', () => {
  let component: RegionFairsList;
  let fixture: ComponentFixture<RegionFairsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionFairsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionFairsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
