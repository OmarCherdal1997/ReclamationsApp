import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../Reclamation';
import {reclationList} from '../ReclamationList';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnInit {
    listReclamation= reclationList;
    selectedReclamation: Reclamation;
      constructor() { }

  ngOnInit() {
  }
  onSelect(reclamation: Reclamation){
    this.selectedReclamation=reclamation;
  }

}
