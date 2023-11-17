import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.scss']
})
export class EditUserFormComponent implements OnInit {
  editUserForm: FormGroup;
  @Input() user: User | undefined;
  @Output() onEditUser = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {
    this.editUserForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.patchUserValue();
  }

  patchUserValue() {
    this.editUserForm.patchValue({
      username: this.user?.username || '',
      email: this.user?.email || '',
      name: this.user?.name || '',
      role: this.user?.role.toString() || '' // Ensure role is a string
    });
  }

  onSubmit() {
    this.onEditUser.emit(this.editUserForm.value);
  }
}
