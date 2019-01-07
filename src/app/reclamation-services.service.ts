import { Injectable } from '@angular/core';
import {reclationList} from './ReclamationList';
import {Reclamation} from './Reclamation';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationServicesService {

  constructor() { }
  getReclamation(): Observable<Reclamation[]>{
    return of(reclationList);
  }
  getReclamationById(id: number): Observable<Reclamation>{
    return of(reclationList.find(reclamation=>reclamation.id===id));
  }
}
