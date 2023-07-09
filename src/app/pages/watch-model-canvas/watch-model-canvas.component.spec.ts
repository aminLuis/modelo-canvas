import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchModelCanvasComponent } from './watch-model-canvas.component';

describe('WatchModelCanvasComponent', () => {
  let component: WatchModelCanvasComponent;
  let fixture: ComponentFixture<WatchModelCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WatchModelCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchModelCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
