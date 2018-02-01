import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Material} from './material';
import {MATERIALS} from './mock-materials';
import {MessageService} from './message.service';

@Injectable()
export class MaterialService {

  constructor(private messageService: MessageService) { }

  getMaterials(): Observable<Material[]> {
    this.messageService.add('MaterialService: fetched data');
    return of(MATERIALS);
  }

}
