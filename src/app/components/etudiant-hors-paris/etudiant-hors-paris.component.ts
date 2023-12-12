import { Component } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrl: './etudiant-hors-paris.component.css'
})
export class EtudiantHorsParisComponent {

  tabetu?:   Etudiant[];

  constructor(private etu_service: EtudiantServiceService){}

  ngOnInit(): void {
    this.tabetu = this.etu_service.etu.filter(etu => etu._ville != "Paris");
    
  }

}
