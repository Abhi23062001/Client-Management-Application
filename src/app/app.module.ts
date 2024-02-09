import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { CreateClientComponent } from './createclient/createclient.component';
import { ListclientComponent } from './listclient/listclient.component';
import { ProjectComponent } from './project/project.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ListprojectComponent } from './listproject/listproject.component';
import { TaskComponent } from './task/task.component';
import { CreatetaskComponent } from './createtask/createtask.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { MeetingComponent } from './meeting/meeting.component';
import { CreatemeetingComponent } from './createmeeting/createmeeting.component';
import { ListmeetingComponent } from './listmeeting/listmeeting.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentProjectComponent } from './dialog-content-project/dialog-content-project.component';
import { ProjectModifyDialogComponent } from './project-modify-dialog/project-modify-dialog.component';
import { DialogTaskViewComponent } from './dialog-task-view/dialog-task-view.component';
import { DialogTaskModifyComponent } from './dialog-task-modify/dialog-task-modify.component';
import { DialogMeetingViewComponent } from './dialog-meeting-view/dialog-meeting-view.component';
import { DialogMeetingModifyComponent } from './dialog-meeting-modify/dialog-meeting-modify.component';
import { DialogModifyClientComponent } from './dialog-modify-client/dialog-modify-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ModalComponent,
    RegisteruserComponent,
    ClientComponent,
    CreateClientComponent,
    ListclientComponent,
    ProjectComponent,
    CreateprojectComponent,
    ListprojectComponent,
    TaskComponent,
    CreatetaskComponent,
    ListtaskComponent,
    MeetingComponent,
    CreatemeetingComponent,
    ListmeetingComponent,
    DialogContentComponent,
    DialogContentProjectComponent,
    ProjectModifyDialogComponent,
    DialogTaskViewComponent,
    DialogTaskModifyComponent,
    DialogMeetingViewComponent,
    DialogMeetingModifyComponent,
    DialogModifyClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
