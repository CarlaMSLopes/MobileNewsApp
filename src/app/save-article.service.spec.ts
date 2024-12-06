import { TestBed } from '@angular/core/testing';

import { SaveArticleService } from './save-article.service';

describe('SaveArticleService', () => {
  let service: SaveArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
