import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent {
  addUserForm!: FormGroup;
  @Output() onAddUser = new EventEmitter<User>();

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.addUserForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      name: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    this.onAddUser.emit(this.addUserForm.value);
  }

}