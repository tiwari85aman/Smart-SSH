import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DataService } from '../data.service';

// export interface DashboardAPI {
//   Hostname: number,
//   IdentityFile: string,
//   Port: string,
//   User: string
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  // cards =
  public hosts = null;
  public api_error = null;
  regularDistribution = 100 / 3.2 + '%';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService
      .getData('/host')
      .subscribe((data: any[]) => {
        this.hosts = this.filter_dashboard_keys(data['data']);
      },
        err => {
          this.api_error = err;
        }
      );
  }

  filter_dashboard_keys(data: []) {
    const allowed = ['Hostname', 'IdentityFile', 'Port', 'User'];
    var response = {};
    for (let key in data) {
      let value = data[key];

      const filtered = Object.keys(value)
        .filter((key) => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = value[key];
          return obj;
        }, {});
      response[key] = filtered;
    }
    return response;
  }
}
