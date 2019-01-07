import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../Reclamation';
import {reclationList} from '../ReclamationList';
import {ReclamationServicesService} from '../reclamation-services.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnInit {
    listReclamation:Reclamation[];
    selectedReclamation: Reclamation;
      constructor(private reclamationServices:ReclamationServicesService) { }

  ngOnInit() {
    this.getReclamations();
  }
  onSelect(reclamation: Reclamation){
    this.selectedReclamation=reclamation;
  }
  getReclamations(): void{
   
   		this.reclamationServices.getReclamation()
         .subscribe(listReclamation => {this.listReclamation=listReclamation
           
       });
  }

}
