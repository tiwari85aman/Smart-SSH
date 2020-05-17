import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  // cards =
  public hosts = null;
  regularDistribution = 100 / 3.2 + '%';


  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {

    this.dataService
      .getData('http://localhost:5000/ssh/host')
      .subscribe((data: any[]) => {
        console.log(data);
        this.hosts = data;
      });
  }
}
