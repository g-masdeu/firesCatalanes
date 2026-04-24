import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsList } from './regions-list';

describe('RegionsList', () => {
  let component: RegionsList;
  let fixture: ComponentFixture<RegionsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
