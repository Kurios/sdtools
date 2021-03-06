import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapExplorerComponent } from './map-explorer.component';

describe('MapExplorerComponent', () => {
  let component: MapExplorerComponent;
  let fixture: ComponentFixture<MapExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapExplorerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
