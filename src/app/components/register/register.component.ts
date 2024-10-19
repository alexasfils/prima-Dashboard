import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  constructor() { }
  
  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    const nome = form.value.nome
    const email = form.value.email
    const password = form.value.password
    //chiamare authService
  }

}
