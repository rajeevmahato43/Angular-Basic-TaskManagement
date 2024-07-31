import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() cancel=new EventEmitter();
  @Output() add=new EventEmitter<NewTask>();
  enteredTitle=''
  enteredSummary=''
  enteredDueDate=''

closeModel(){
  this.cancel.emit()
}
onSubmit(){
  this.add.emit({title:this.enteredTitle,summary:this.enteredSummary,dueDate:this.enteredDueDate})
}
}
