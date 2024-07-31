import { Component, Input } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users'
import { TaskComponent } from './task/task.component';
import { NewTask, Task } from './task.model';
import { DummyTask } from '../../dummy-task';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: { id: string; name: string; avatar: string };
  taskItem = DummyTask;
  isAddTask=false;;
  constructor(){
    const localTask= localStorage.getItem("tasks");
    if(localTask){
      this.taskItem=JSON.parse(localTask);
    }
  }
  get selectedUserTask() {
    return this.taskItem.filter((item) => item.userId == this.user.id)
    
  }
  completeTask(id: string) {
    this.taskItem = this.taskItem.filter((item) => item.id != id)
  }
  onAddTask(){
    this.isAddTask=true;
  }
  onCancleAddTask(){
    this.isAddTask=false;
  }
  onNewTask(task:NewTask){
    this.taskItem.push({
      id:(Date.now()).toString(),
      userId:this.user.id,
      title:task.title,
      summary:task.summary,
      dueDate:task.dueDate,
    })
    this.isAddTask=false;

  }
  saveTaskLocal(){
    localStorage.setItem("tasks",JSON.stringify(this.taskItem))
  }
}
