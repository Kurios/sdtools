import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickBanComponent } from './pick-ban.component';

describe('PickBanComponent', () => {
  let component: PickBanComponent;
  let fixture: ComponentFixture<PickBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickBanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
