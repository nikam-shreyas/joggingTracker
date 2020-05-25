import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private data = new BehaviorSubject(null);
  currentData = this.data.asObservable();
  constructor() { }
z
  updateData(data: any){
    this.data.next(data);
  }
}
