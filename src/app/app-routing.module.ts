import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ ProfileComponent} from './profile/profile.component';
import{AboutComponent} from './about/about.component';

const routes: Routes = [
    { path: 'profile', component: ProfileComponent},
    { path: 'about', component: AboutComponent},
    { path: '', redirectTo:"/about", pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
