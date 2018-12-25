import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('HomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpHandler, HttpClient]
  }));

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });
});
