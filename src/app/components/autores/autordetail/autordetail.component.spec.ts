import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutordetailComponent } from './autordetail.component';

describe('AutordetailComponent', () => {
  let component: AutordetailComponent;
  let fixture: ComponentFixture<AutordetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutordetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
