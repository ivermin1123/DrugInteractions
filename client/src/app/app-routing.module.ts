import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent} from './components/login/login.component';
import { SingupComponent} from './components/singup/singup.component';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'Search', component: SearchComponent},
  { path: 'Feedback', component: FeedbackComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Signup', component: SingupComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
