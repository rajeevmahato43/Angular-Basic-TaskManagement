import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './components/user/user.component';
import { SignalComponent } from './components/signal/signal.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/tasks/task/task.component'; 

import {DUMMY_USERS} from "./dummy-users"
import { CommonModule } from '@angular/common';
import { DummyTask } from './dummy-task';
import { Task } from './components/tasks/task.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,CommonModule, UserComponent,SignalComponent,TasksComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'first-app';
  userList=DUMMY_USERS;
  selectedUser:any;

  getDataFromChild(user:any){
   this.selectedUser=user;
   
  }

}

