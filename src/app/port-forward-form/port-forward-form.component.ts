import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-port-forward-form',
  templateUrl: './port-forward-form.component.html',
  styleUrls: ['./port-forward-form.component.css']
})
export class PortForwardFormComponent implements OnInit {
  localForwardForm = this.fb.group({
    hostPort: [null, Validators.required],
    host: [null, Validators.required],
    remoteIp: [null, Validators.required],
    remotePort: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit() {
    alert('Thanks!');
  }
}
