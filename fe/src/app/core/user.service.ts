import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IFormAuth } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private router:Router){

  }
  get userIsLogin(){
    return localStorage['user'] ? true :false
  }
  register(data:IFormAuth){
    localStorage.setItem('user',JSON.stringify(data))
  }
  login(){
    localStorage.setItem('user',JSON.stringify({
        name:"سهند",
        lastName:'سوادی',
        email:"savadisahand@gmail.com"
    }))
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
  get fullName(){
    const {lastName,name} = JSON.parse(localStorage['user']) as IFormAuth
    return `${name} ${lastName}`
  }
}
