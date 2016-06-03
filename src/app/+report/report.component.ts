import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';

import { Encounter, IAlien } from '../shared/models';
import { EncounterService, AlienService } from '../shared/services';

@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'],
  providers: [EncounterService, AlienService]

})
export class ReportComponent implements OnInit {
  
  public encounter: Encounter;
  public aliens: IAlien[];
  public NO_ALIEN_SELECTED: string;
  public date: string;
  public colonistID: string;
  public status: string;

  
  constructor(
    private router: Router,
    private encounterService: EncounterService,
    private alienService: AlienService
  ) {
    this.NO_ALIEN_SELECTED = '(none)';
    this.status = 'loading';
  }

  ngOnInit() {
    
    let today = new Date;
    this.setDate(today);
    
    this.colonistID = sessionStorage.getItem('colonistID');
    
    this.encounter = new Encounter(this.NO_ALIEN_SELECTED, this.date, null, this.colonistID);
    
    this.alienService.getAliens().then(( result )=>{
      this.aliens = result;
      this.status = 'active';
    })
  }
  
  private setDate(date) {
    
    this.date = date.getFullYear().toString() + '-';
    
    this.date += date.getMonth() + 1 < 10 ? '0' : '';
    this.date += (date.getMonth() + 1).toString();
    
    this.date += date.getDate() < 10 ? '0' : '';
    this.date += '-' + date.getDate().toString();
    
  }
  
  public onSubmit() {
    
     this.encounterService.postEncounter(this.encounter)
                          .then( result => this.router.navigate(['/encounters']));
                              
  }
  
  get noAlien(): boolean {
    return this.encounter.atype === this.NO_ALIEN_SELECTED;
  }
  
  get noAction(): boolean {
    return this.encounter.action === '';
  }

}
