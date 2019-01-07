import { Component, OnInit } from '@angular/core';
import{ReclamationServicesService} from '../reclamation-services.service';
import {Reclamation}   from '../Reclamation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   RECLAMATIONS: Reclamation[];
  constructor(private reclamationServices: ReclamationServicesService) { }

  ngOnInit() {
    this.getRec();
  }
  getRec(): void{
    		this.reclamationServices.getReclamation()
          .subscribe(RECLAMATIONS => { this.RECLAMATIONS=RECLAMATIONS.slice(1,5)
            
        });
  }

}
