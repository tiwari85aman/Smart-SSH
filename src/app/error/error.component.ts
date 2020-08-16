import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }
  public errorImagePath = require("../../assets/images/server_down.svg");
  
  ngOnInit(): void {
    console.log(this.errorImagePath);
  }

}
