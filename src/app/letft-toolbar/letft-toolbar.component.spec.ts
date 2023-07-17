import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetftToolbarComponent } from './letft-toolbar.component';

describe('LetftToolbarComponent', () => {
  let component: LetftToolbarComponent;
  let fixture: ComponentFixture<LetftToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetftToolbarComponent]
    });
    fixture = TestBed.createComponent(LetftToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
