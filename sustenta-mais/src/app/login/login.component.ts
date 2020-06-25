import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/Usuarios';
import { Router } from '@angular/router';
import { UsuariosService } from '../service/usuarios.service';
import { Key } from 'protractor';
import { Location } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioLogado } from '../model/UsuarioLogado';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  usuarioLogado: UsuarioLogado = new UsuarioLogado

  usuario: Usuarios  = new Usuarios

  listaUsuarios: Usuarios []

  confirmaSenha = "";

  erroLogin = false

  alerta = false

  constructor(
    private router : Router,
    private locationPage: Location,
    private authService: AuthService
    ) { }

  ngOnInit() {
    let item: string = localStorage.getItem('cadastroOk')

    if(item == 'true') {
      this.alerta = true
      localStorage.clear()

      setTimeout(() => {
        this.refresh()
      }, 3000)
    }
  }

  refresh() {
    this.router.navigateByUrl('cadastro', {skipLocationChange: true}).then(() => {
      this.router.navigate([this.locationPage.path()])
    })
  }

  entrar(){
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogado) => {
      this.usuarioLogado = resp
      localStorage.setItem('token', this.usuarioLogado.token)
      localStorage.setItem('nome', this.usuarioLogado.nome)
      this.router.navigate(['produtos']);
    }, err => {
      alert("Erro ao efetuar o login. Verifique o e-mail e a senha.")
    })
  }
}
