import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss'],
})
export class AddUserFormComponent implements OnInit {
  @Output() submit = new EventEmitter<any>();
  userForm: FormGroup;
  constructor() {}

  onSubmit({ value, valid }: { value: any; valid: boolean }) {
    if (valid) {
      this.submit.emit({
        type: 'ADD',
        data: { name: value.username },
      });
      this.userForm.reset();
    } else {
      alert('Errors');
    }
  }
  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }
}
