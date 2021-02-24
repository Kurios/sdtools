import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivImageComponent } from './div-image.component';

describe('DivImageComponent', () => {
  let component: DivImageComponent;
  let fixture: ComponentFixture<DivImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
