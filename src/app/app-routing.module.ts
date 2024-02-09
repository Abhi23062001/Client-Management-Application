import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';
import { MeetingComponent } from './meeting/meeting.component';
import { authGuard } from './client/auth.guard';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "client", component: ClientComponent, canActivate: [authGuard] },
  { path: "project", component: ProjectComponent, canActivate: [authGuard] },
  { path: "task", component: TaskComponent, canActivate: [authGuard] },
  { path: "meeting", component: MeetingComponent, canActivate: [authGuard] }
];
// canActivate: [authGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
