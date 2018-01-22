import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-header',
  templateUrl: './header.component.html',
  styles:['.container' +
  '{background-color:#42f49b',
  'padding:50px',
  'font-family:sans serif}']})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
