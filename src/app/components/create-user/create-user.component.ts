import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  form: FormGroup;

  constructor(
    private readonly userService: UserService
  ) {
    this.form =  new FormGroup({
      UserCode: new FormControl(),
      UserName: new FormControl()
    })
  }

  ngOnInit(): void {}

  async onSubmit() {
    const response = await this.userService.create(this.form.value);
    console.log(response);
  }
}
