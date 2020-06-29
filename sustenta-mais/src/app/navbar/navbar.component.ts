import { Component, OnInit, Renderer2, ElementRef, Query } from '@angular/core';
import { Router } from '@angular/router';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../service/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faWater = faWater;

  nome: string = localStorage.getItem('nome')
  nameUser: string = localStorage.getItem('nome')
  token: string = localStorage.getItem('token')

  constructor(
    private router : Router,
    public auth : AuthService,
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  sair() {
    localStorage.clear()
    this.router.navigate(['login'])
  }

}
