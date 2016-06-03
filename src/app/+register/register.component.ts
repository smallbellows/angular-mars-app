import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';

import { IOccupation, Colonist } from '../shared/models';
import { ColonistService, OccupationService } from '../shared/services';


@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  providers: [ColonistService, OccupationService]
})
export class RegisterComponent implements OnInit {
    
  public occupations: IOccupation[];
  public colonist: Colonist;
  public NO_OCCUPATION_SELECTED: string;
  private colonistID: string;

  
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
                         this.colonistID = result.id;
                         
  //  put the colonist into user's local storage, so that their ID can be recorded 
  //  in the encounter component
   
    var storage;
    var fail;
    var uid;
    try {
      uid = new Date;
      (storage = window.localStorage).setItem(uid, uid);
      fail = storage.getItem(uid) != uid;
      storage.removeItem(uid);
      fail && (storage = false);
    } catch (exception) {}
    
    if (storage) {
      storage.setItem('colonistID', this.colonistID);
    }
   });

 }
 
 get noOccupation() : boolean {
   
   return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
 
}
 
}
