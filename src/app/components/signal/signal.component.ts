import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users';

function randomInd(){
return Math.floor(Math.random()*DUMMY_USERS.length)
}

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
selectedUser=signal(DUMMY_USERS[randomInd()]);
imagePath=computed(()=>"users/"+this.selectedUser().avatar)

onSelectUser(){
  this.selectedUser.set(DUMMY_USERS[randomInd()])
}

}
