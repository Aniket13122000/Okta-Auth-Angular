import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeHandleComponent } from './code-handle.component';

describe('CodeHandleComponent', () => {
  let component: CodeHandleComponent;
  let fixture: ComponentFixture<CodeHandleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeHandleComponent]
    });
    fixture = TestBed.createComponent(CodeHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
