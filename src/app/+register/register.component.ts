import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';

import { IOccupation, Colonist } from '../shared/models';
import { ColonistService, OccupationService } from '../shared/services';


@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  providers: [ColonistService, OccupationService]
})
export class RegisterComponent implements OnInit {
    
  public occupations: IOccupation[];
  public colonist: Colonist;
  public NO_OCCUPATION_SELECTED: string;
  
  constructor(
    private router: Router,
    private colonistService: ColonistService,
    private occupationService: OccupationService
  ) { 
    this.NO_OCCUPATION_SELECTED = '(none)';
  }

  ngOnInit() {
    
    this.colonist = new Colonist(null,null,this.NO_OCCUPATION_SELECTED);
    
    this.occupationService.getJobs().then(( result )=>{
      this.occupations = result;
    });
  }
 
 onSubmit(): void {
   
   this.colonistService.createColonist(this.colonist)
                       .then( (result) => {
                         this.router.navigate(['/encounters']);

    
    sessionStorage.setItem('colonistID', result.id);
   });

 }
 
 get noOccupation() : boolean {
   
   return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
 
}
 
}
