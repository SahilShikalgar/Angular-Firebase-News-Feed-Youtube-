import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsElementsContainerComponent } from './news-elements-container.component';

describe('NewsElementsContainerComponent', () => {
  let component: NewsElementsContainerComponent;
  let fixture: ComponentFixture<NewsElementsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsElementsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsElementsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
