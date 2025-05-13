import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxdemoComponent } from './rxdemo.component';

describe('RxdemoComponent', () => {
  let component: RxdemoComponent;
  let fixture: ComponentFixture<RxdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxdemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
