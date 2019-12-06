import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { BarreMessageComponent } from './barre-message/barre-message.component';
import { SalonComponent } from './salon/salon.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UsersComponent } from './users/users.component';
import { UserItemComponent } from './user-item/user-item.component';
import { appRoutes } from 'src/routes';

import { ChatServiceService } from './services/chat-service.service';
import { LoginServiceService } from './services/login-service.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    BarreMessageComponent,
    SalonComponent,
    MessageComponent,
    LoginComponent,
    TopbarComponent,
    UsersComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [LoginServiceService, ChatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
