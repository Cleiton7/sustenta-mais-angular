import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/Usuarios';
import { Router } from '@angular/router';
import { UsuariosService } from '../service/usuarios.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuarios  = new Usuarios

  listaUsuarios: Usuarios []

  confirmaSenha = "";

  constructor(private router : Router, private usuarioService : UsuariosService) { }

  ngOnInit(): void {
  }

}
