import { Component, EventEmitter, Input, Output } from '@angular/core';

import {Task} from '../task.model'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task
  @Output() completeTask=new EventEmitter();

  onCompleteTask(){
    this.completeTask.emit(this.task.id)
  }
}
