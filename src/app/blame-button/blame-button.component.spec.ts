import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlameButtonComponent } from './blame-button.component';

describe('BlameButtonComponent', () => {
  let component: BlameButtonComponent;
  let fixture: ComponentFixture<BlameButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlameButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlameButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
