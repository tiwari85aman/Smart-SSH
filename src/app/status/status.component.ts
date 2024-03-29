import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {

  online = null
  offline = null
  constructor(    private dataService: DataService
    ) {}

  ngOnInit() {

    this.dataService
      .getData('/ping')
      .subscribe((data: any[]) => {
        // console.log(data);
        this.online = data["data"]["online"]
        this.offline = data["data"]["offline"]
      });
  }
}
