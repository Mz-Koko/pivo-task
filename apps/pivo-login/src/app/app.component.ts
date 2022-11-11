import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'pivo-task-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  title = 'pivo-login';

  loginForm!: FormGroup;
  constructor(private builder: FormBuilder, public service: UserService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.loginForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.loginUser(this.loginForm.value).subscribe(
      (res: any) => {
        this.toastr.success('Login Successful');
      },
      err => {
        if (err.status === 400){
          this.toastr.error('Incorrect username or password', 'Authentication failed');
        } else {
          console.log(err);
        }
      }
    );

  }
}
