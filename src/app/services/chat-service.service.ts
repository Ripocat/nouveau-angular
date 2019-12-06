import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginServiceService } from '../services/login-service.service';
import * as firebase from 'firebase/app';
import { ChatMessage } from '../models/chat-messages.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  user: any;
  chatMessages: FirebaseListObservable<any>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
    ) { 
      this.afAuth.authState.subscribe(auth => {
        if(auth !== undefined && auth !== null){
          this.user = auth;
        }
      })
    }

  sendMessage(msg: string) {
    const timestamp = this.getTimestamp();
    const email = this.user.email;
    //this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: this.userName,
      email: email
    });

    console.log('Called sendMessage()!')
  }

  /*
  getMessages(): FirebaseListObservable<ChatMessage[]> {
    // query to create our message feed binding
    return this.db.list('messages', ref => {
      return ref.limitToLast(25).orderByKey();
    });
  }*/
  
  getTimestamp() {
    const now = new Date();
    const date = 
    now.getUTCFullYear() + '/' + 
    (now.getUTCMonth() + 1) + '/' + 
    now.getUTCDay();

    const time = 
    now.getUTCHours() + ':' +
    now.getUTCMinutes() + ':' +
    now.getUTCSeconds();
    return(date + ' ' + time);
  }
}
