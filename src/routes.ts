import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'chat', component: ChatroomComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'},
];
