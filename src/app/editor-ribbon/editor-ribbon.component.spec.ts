import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorRibbonComponent } from './editor-ribbon.component';

describe('EditorRibbonComponent', () => {
  let component: EditorRibbonComponent;
  let fixture: ComponentFixture<EditorRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorRibbonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
