import { Component } from '@angular/core';
require('electron-titlebar')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart SSH';
}
