import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private router: Router,private userService:UserService) {
  }
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    tellphone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  onSubmit() {
      this.userService.register({
        email:this.userForm.value.email as string,
        name:this.userForm.value.name as string,
        lastName:this.userForm.value.lastName as string,
      });
      this.router.navigate(['/'], { replaceUrl: true })
  }
}
