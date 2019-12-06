import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router)
{
  this.user = afAuth.authState;
}

signUp(username: string)
{
  const status = 'online';
}
}
