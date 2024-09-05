import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent,pathMatch:'full'},
    {path:'profile', component:ProfileComponent,pathMatch:'full'}

];
