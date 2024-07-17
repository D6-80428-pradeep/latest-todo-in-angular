import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginForm: FormGroup;
  showPassword: boolean = false;
  constructor(private router:Router,private fb:FormBuilder){
    sessionStorage.setItem("isloggIn","false");
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      country: ['', Validators.required]
    });

  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  login(useremail:any,password:any) {
    

    // Implement your login logic here
     if(useremail=='pradeep@gmail.com' && password=='Pradeep' && this.loginForm){
      sessionStorage.setItem("isloggIn","true");
      console.log("inside login");
         this.router.navigate(['/layout']);
     }else{
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You have entered wrong Email and Password !!",
        showConfirmButton: false,
        timer: 2900
      });
     }
  }
  forgotPassword() {
    //Will Implement forgot password logic here
    console.log("Forgot Password clicked");
    // Navigate to forgot password page or show a modal
    this.router.navigate(['/forgot-password']);
  }
}
