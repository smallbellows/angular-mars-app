import { Component } from '@angular/core';
import { ColonistService, OccupationService, AlienService, EncounterService } from './shared/services'; //service for http request
import { IOccupation, Colonist, Encounter, IAlien } from './shared/models'; //data model

@Component({
  moduleId: module.id,
  selector: 'project-5-app',
  templateUrl: 'project-5.component.html',
  styleUrls: ['project-5.component.css'],
  providers: [OccupationService, ColonistService, AlienService, EncounterService]
})
export class Project5AppComponent {
  
  title = 'project-5 works!';
  public job: IOccupation;
  public colonist: Colonist;
  public encounter: Encounter;
  public alien: IAlien;
  public oldEncounter: Encounter;
  
  constructor(
    private occupationService: OccupationService,
    private colonistService: ColonistService,
    private alienService: AlienService,
    private encounterService: EncounterService
     
  ) {
    occupationService.getJobs().then(( jobs )=>{
      this.job = jobs[0];
      console.log(this.job);
    });
    
    this.colonist = new Colonist('Captain Picard', '34', '3');
    colonistService.createColonist(this.colonist).then( (colonist )=>{
      console.log(colonist);
    });
    
    alienService.getAliens().then( (aliens) => {
      this.alien = aliens[0];
      console.log(this.alien);
    } );
    
    this.encounter = new Encounter('Ectomorph', "2016-05-31", "made a new friend today", "3");
    encounterService.postEncounter(this.encounter).then( (encounter) => {
      console.log(encounter);
    })
    
    encounterService.getEncounters().then(( encounters) => {
      this.oldEncounter = encounters[0];
      console.log(this.oldEncounter);
    })
  }
  
  
}
