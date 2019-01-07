import { Component, OnInit ,Input } from '@angular/core';
import {Reclamation} from '../Reclamation';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ReclamationServicesService} from '../reclamation-services.service';

@Component({
  selector: 'app-reclamation-details',
  templateUrl: './reclamation-details.component.html',
  styleUrls: ['./reclamation-details.component.css']
})
export class ReclamationDetailsComponent implements OnInit {
@Input() reclamation: Reclamation;
  constructor(private route: ActivatedRoute,
    private reclamationService: ReclamationServicesService,
    private location: Location) { }

  ngOnInit() {
    this.getReclamtion();
  }
  getReclamtion(): void{
    const id =+this.route.snapshot.paramMap.get('id');
    		this.reclamationService.getReclamationById(id)
          .subscribe(reclamation => { this.reclamation=reclamation 
            
        });
  }
  goBack() : void{
    this.location.back();
  }

}
