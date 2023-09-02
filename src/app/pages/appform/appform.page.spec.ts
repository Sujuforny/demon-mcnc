import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppformPage } from './appform.page';

describe('AppformPage', () => {
  let component: AppformPage;
  let fixture: ComponentFixture<AppformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
