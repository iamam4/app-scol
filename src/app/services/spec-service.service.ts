import { Injectable } from '@angular/core';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecServiceService {


  public spec = [

    new Specialite ('Mathématique', 1),
    new Specialite ('Dev Front', 2),
    new Specialite ('Dispositif Interactive', 3),
    new Specialite ('Animation 3D', 4),
    new Specialite ('Histoire', 5),
    new Specialite ('Science', 6),


  ]

  constructor() { }
}
