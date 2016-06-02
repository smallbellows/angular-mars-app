import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  directives: [ROUTER_DIRECTIVES]

})
export class EncountersComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
