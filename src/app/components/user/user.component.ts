import { Component, EventEmitter, Input, output, Output } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users';
const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userList:any=DUMMY_USERS;

  // get data from parent component 
  @Input({required:true}) name!:string;
  @Input({required:true}) index!:number;
  @Input({required:true}) selected!:boolean;

  // send data to parent component     || custom event
  @Output() select=new EventEmitter();

  //2nd way to send data to parent component;   || custom event
  select2=output();


  get imagePath(){
    return 'users/'+this.userList[this.index].avatar;
  }

  onSelectUser(){
    this.select.emit(this.userList[this.index])
    this.select2.emit(this.userList[this.index])
  }

}
