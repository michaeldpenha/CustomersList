import { TestBed } from '@angular/core/testing';

import { RouterService } from './router.service';
import { Router, RouterModule } from '@angular/router';

describe('RouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: Router, useClass: RouterModule}]
  }));

  xit('should be created', () => {
    const service: RouterService = TestBed.get(RouterService);
    expect(service).toBeTruthy();
  });
});
