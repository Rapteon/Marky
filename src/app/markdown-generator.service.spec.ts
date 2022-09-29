import { TestBed } from '@angular/core/testing';

import { MarkdownGeneratorService } from './markdown-generator.service';

describe('MarkdownGeneratorService', () => {
  let service: MarkdownGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
