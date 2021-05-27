import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppUser } from 'shared/model/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isAdminFlag:boolean = true;
  constructor(private db: AngularFirestore) { }

  save(user: firebase.User){
    // Add the new record
    // this.db.collection('users').add({
    //   name: user.displayName,
    //   email: user.email
    // }).then(res =>{
    //   console.log(res);
    // })

    //update the record
    this.db.collection('users').doc(user.uid).set({
      name: user.displayName,
      email: user.email,
      isAdmin: this.isAdminFlag
    }).then(res =>{
      // console.log(res);
    })
  }

  get(user: firebase.User){
    //due to firebase issue adding default value
    // this.db.collection('users').valueChanges().subscribe((res: any)=>{
    //   return res[0].isAdmin?true:false;
    // })
    return this.isAdminFlag;
  }

  isAdmin(){
    return this.isAdminFlag;
  }
}
