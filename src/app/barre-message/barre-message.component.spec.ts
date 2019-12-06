import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreMessageComponent } from './barre-message.component';

describe('BarreMessageComponent', () => {
  let component: BarreMessageComponent;
  let fixture: ComponentFixture<BarreMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
