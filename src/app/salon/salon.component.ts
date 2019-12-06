import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';
import { ChatMessage } from '../models/chat-messages.model';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit{
  salon: FirebaseListObservable<ChatMessage[]>;

  constructor(private chat: ChatServiceService) { }

  ngOnInit() {
    console.log("feed initialised")
    //this.salon = this.chat.getMessages();
  }
}
