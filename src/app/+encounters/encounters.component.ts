import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router, Routes, ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from '@angular/router';
import { Encounter } from '../shared/models';
import { EncounterService } from '../shared/services';


@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css'],
  providers: [EncounterService],
  directives: [ROUTER_DIRECTIVES]

})
export class EncountersComponent implements OnInit {
  
  public encounters: Encounter[];
  
  constructor(
    private router: Router,
    private encounterService: EncounterService
  ) {}

  ngOnInit() {
    
    this.encounterService.getEncounters().then(( result ) => {
      this.encounters = result;
    });   
  }

}
