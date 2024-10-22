import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogOutComponent } from './components/log-out/log-out.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'homepage', component: LogOutComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
