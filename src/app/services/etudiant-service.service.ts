import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {

  public etu = [


    new Etudiant ('Moreau','Alexandre','5 rue des chataigniers','77181','Paris','amoreau77181@gmail.com','Homme',21,1),
    new Etudiant ('Leroux','Marceau','14 rue des chorizo','93370','Paris','marceau@gmail.com','Homme',20,2),
    new Etudiant ('Rodriguez','Esteban','19 rue des pagnyans','95150','Paris','esteban@gmail.com','Homme',19,3),
    new Etudiant ('Gauvin','Benoit','10 rue des oliviers','85150','Vaire','benoit@gmail.com','Homme',22,4),
    new Etudiant ('Guttin','Léo','12 rue des dobber','77650','Pommeuse','leo@gmail.com','Femme',20,5),
    new Etudiant ('Letellier','Théo','52 rue des motards','93270','Sevran','theo@gmail.com','Homme',25,6),
  ]


  constructor() {

    

   }
}
