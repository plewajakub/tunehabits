import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThingsComponentComponent } from './top-things-component.component';

describe('TopThingsComponentComponent', () => {
  let component: TopThingsComponentComponent;
  let fixture: ComponentFixture<TopThingsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopThingsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopThingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
