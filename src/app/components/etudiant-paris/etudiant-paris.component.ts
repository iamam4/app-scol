import { Component } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrl: './etudiant-paris.component.css'
})
export class EtudiantParisComponent {

  tabetu?:   Etudiant[];

  constructor(private etu_service: EtudiantServiceService){}

  ngOnInit(): void {
    this.tabetu = this.etu_service.etu.filter(etu => etu._ville === "Paris");
    
  }

}
