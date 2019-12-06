import { Component, OnInit, Input } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';
import { LoginServiceService } from '../services/login-service.service';
import { ChatMessage } from '../models/chat-messages.model';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() ChatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();

  constructor() { }

  ngOnInit(chatMessage = this.ChatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
  }

}
