import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { HostFormComponent } from './host-form/host-form.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'hosts', component: DashboardComponent },
  { path: 'add', component: HostFormComponent },
  { path: 'status', component: StatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
