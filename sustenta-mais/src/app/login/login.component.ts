import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/Usuarios';
import { Router } from '@angular/router';
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

  admin: string = localStorage.getItem('admin')

  constructor(
    private router : Router,
    private locationPage: Location,
    private authService: AuthService
    ) { }

  ngOnInit() {
    let item: string = localStorage.getItem('cadastroOk') // pega o valor do campo 'cadastroOk' no localStorage que foi adicionado ao fazer o cadastro e adiciona na variavel item
    // se esse If retornar true significa que houve um cadastro de usuario
    if(item == 'true') {
      this.alerta = true // variavel recebe true e será usada no HTML com *ngIf para mostrar uma mensagem ao usuario
      localStorage.removeItem('cadastroOk') // limpa o localStorage

      // define o tempo de 3 segundos para chamar o metodo refresh()
      setTimeout(() => {
        this.refresh()
      }, 3000)
    }
  }

  // limpa a mensagem mostrada na tela de login após o cadastro
  refresh() {
    this.router.navigateByUrl('cadastro', {skipLocationChange: true}).then(() => {
      this.router.navigate([this.locationPage.path()])
    })
  }

  // método para o Login chamando o EndPoint logar() que foi criado na service auth.service.ts e retornando
  // o objeto UsuarioLogado que foi criado no Spring
  entrar(){
    this.erroLogin = false // valor da variável é setado ao chamar o metodo entrar()
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogado) => {
      this.usuarioLogado = resp
      localStorage.setItem('token', this.usuarioLogado.token) // retorna o atributo token de UsuarioLogado
      localStorage.setItem('nome', this.usuarioLogado.nome) // retorna o atributo nome de UsuarioLogado
      localStorage.setItem('admin', this.usuarioLogado.admin) // retorna o atributo admin de UsuarioLogado
      this.router.navigate(['produtos']); // após logar o usuario é redirecionado para a pagina de produtos
    }, err => {
      this.erroLogin = true // varialvel recebe true para ser usada no HTML
    })
  }
}
