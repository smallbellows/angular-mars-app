import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';

import { Encounter, IAlien } from '../shared/models';
import { EncounterService, AlienService } from '../shared/services';

@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  providers: [EncounterService, AlienService]

})
export class ReportComponent implements OnInit {
  
  public encounter: Encounter;
  public aliens: IAlien[];
  
  constructor(
    private router: Router,
    private encounterService: AlienService,
    private alienService: AlienService
  ) {}

  ngOnInit() {
    
    this.encounter = new Encounter(null, null, null, '1');
    
    this.alienService.getAliens().then(( result )=>{
      this.aliens = result;
    })
  }
  
  public onSubmit() {
    
  }

}
