import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogOutComponent } from './components/log-out/log-out.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {path: 'my-site', component: LogOutComponent},
  {path: 'landing', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
