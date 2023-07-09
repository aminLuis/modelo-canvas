import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCanvasComponent } from './edit-canvas.component';

describe('EditCanvasComponent', () => {
  let component: EditCanvasComponent;
  let fixture: ComponentFixture<EditCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
