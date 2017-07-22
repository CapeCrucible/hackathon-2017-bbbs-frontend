import { TestBed, inject } from '@angular/core/testing';

import { HttpWrapper } from './http-wrapper.service';

describe('HttpWrapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpWrapper]
    });
  });

  it('should be created', inject([HttpWrapper], (service: HttpWrapper) => {
    expect(service).toBeTruthy();
  }));
});
