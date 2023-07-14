import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseLisComponent } from './showcase-lis.component';

describe('ShowcaseLisComponent', () => {
  let component: ShowcaseLisComponent;
  let fixture: ComponentFixture<ShowcaseLisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseLisComponent]
    });
    fixture = TestBed.createComponent(ShowcaseLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
