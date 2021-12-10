import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryHomeComponent } from './diary-home.component';

describe('DiaryHomeComponent', () => {
  let component: DiaryHomeComponent;
  let fixture: ComponentFixture<DiaryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
