import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  directives: [ROUTER_DIRECTIVES]

})
export class RegisterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
