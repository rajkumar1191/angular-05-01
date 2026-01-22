import { Component } from '@angular/core';
import { UserFacade } from '../../store/user.facade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(public facade: UserFacade) { }

  loadUsers() {
    this.facade.loadUsers();
  }

}
