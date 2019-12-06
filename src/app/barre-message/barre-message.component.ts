import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';

@Component({
  selector: 'app-barre-message',
  templateUrl: './barre-message.component.html',
  styleUrls: ['./barre-message.component.css']
})
export class BarreMessageComponent implements OnInit {

  message: string;

  constructor(private chat: ChatServiceService) { }

  ngOnInit() {
  }

  send() {
    this.chat.sendMessage(this.message);
  }

  handleSubmit($event) {
    if($event.keyCode === 13){
      this.send();
    }
  }
  

}
