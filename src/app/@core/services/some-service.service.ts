import { Injectable } from '@angular/core';
import { EssentialData } from '../models';

@Injectable()
export class SomeServiceService {

  someEssentialData: EssentialData = {
    prop1: 'John Browne',
    prop2: true,
    prop3: 'male',
    prop4: ['cooking', 'football', 'reading'],
    prop5: {
      age: '33',
      city: 'Milan'
    }
  }

  constructor() { }

}
