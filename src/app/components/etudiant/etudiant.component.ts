import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent implements OnInit{

  tabetu?:   Etudiant[];

  constructor(private etu_service: EtudiantServiceService){}

 ngOnInit(): void {
   this.tabetu = this.etu_service.etu;
 }

}
