import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  users: User[];
  usersSubject: Subject<User[]>;

  constructor(private _HttpClient: HttpClient) {
    this.users = [];
    this.usersSubject = new BehaviorSubject<User[]>([]);
  }

  getAllUsersFromAPI(): Observable<User[]> {
    return this._HttpClient.get('/assets/data.json') as Observable<User[]>;
  }

  getAllUsers(): User[] {
    return [...this.users];
  }

  getAllUsersAsObservable(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  setAllUsers(users: User[]) {
    this.users = [...users];
    this.usersSubject.next([...users]);
  }

}
