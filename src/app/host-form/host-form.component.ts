import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Data, RouteConfigLoadEnd } from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-host-form',
  templateUrl: './host-form.component.html',
  styleUrls: ['./host-form.component.css']
})
export class HostFormComponent {
  hostForm = this.fb.group({
    host: null,
    hostname: [null, Validators.required],
    port: [22, Validators.required],
    identityfile: [null],
    user: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private dataService: DataService,private router: Router) {}

  onSubmit() {
    alert('Thanks!');
    var temp= this.hostForm.value
    var hostData  = {
      "Host": temp["host"],
      "Hostname" : temp["hostname"],
      "Port": temp["port"],
      "IdentityFile": temp["identityfile"],
      "User":temp["user"]
    }

    this.dataService.postData("/host",hostData).subscribe((data: any[]) => {
      var response = data['data'];
      // alert(response);
      this.router.navigate(['/hosts'])

    });
  }
}
