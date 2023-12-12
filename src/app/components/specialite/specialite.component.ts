import { Component } from '@angular/core';
import { Specialite } from '../../models/specialite';
import { SpecServiceService } from '../../services/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent {

  tabspec?:   Specialite[];

  constructor(private spe_service: SpecServiceService){}

 ngOnInit(): void {
   this.tabspec = this.spe_service.spec;
 }
}
