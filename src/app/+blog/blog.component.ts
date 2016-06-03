import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/common';
import { Router, Routes, ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class BlogComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
