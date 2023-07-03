import { TestBed } from '@angular/core/testing';

import { CanvasModelServiceService } from './canvas-model-service.service';

describe('CanvasModelServiceService', () => {
  let service: CanvasModelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasModelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
