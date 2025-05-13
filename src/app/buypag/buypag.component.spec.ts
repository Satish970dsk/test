import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuypagComponent } from './buypag.component';

describe('BuypagComponent', () => {
  let component: BuypagComponent;
  let fixture: ComponentFixture<BuypagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuypagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuypagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
