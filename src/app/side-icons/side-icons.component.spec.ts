import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideIconsComponent } from './side-icons.component';

describe('SideIconsComponent', () => {
  let component: SideIconsComponent;
  let fixture: ComponentFixture<SideIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideIconsComponent]
    });
    fixture = TestBed.createComponent(SideIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
