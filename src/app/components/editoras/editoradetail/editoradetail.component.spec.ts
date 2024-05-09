import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoradetailComponent } from './editoradetail.component';

describe('EditoradetailComponent', () => {
  let component: EditoradetailComponent;
  let fixture: ComponentFixture<EditoradetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditoradetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditoradetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
