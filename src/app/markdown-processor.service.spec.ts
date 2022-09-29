import { TestBed } from '@angular/core/testing';

import { MarkdownProcessorService } from './markdown-processor.service';

describe('MarkdownProcessorService', () => {
  let service: MarkdownProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
