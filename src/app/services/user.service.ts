import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import User from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly firestore: Firestore
  ) { }

  create(user: User) {
    const placeRef = collection(this.firestore, 'user');
    return addDoc(placeRef, user);
  }
}
