import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangiconsComponent } from './langicons-component';

describe('LangiconsComponent', () => {
  let component: LangiconsComponent;
  let fixture: ComponentFixture<LangiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangiconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
