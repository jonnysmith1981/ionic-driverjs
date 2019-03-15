import { Component, OnInit } from '@angular/core';
import * as Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  driver: Driver;

  constructor() {

  }

  ngOnInit() {
    this.driver = new Driver();
  }

  enableDriver() {
    this.driver.highlight('#my-element');
  }
}
