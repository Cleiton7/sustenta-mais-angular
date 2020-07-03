import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  // EndPoint se conectando à rota /login lá no Spring
  logar(usuarioLogin: UsuarioLogin) {
    return this.http.post('http://localhost:8080/usuario/login', usuarioLogin)
  }

  // metodo verifica se o localStorage na chave 'token' está preenchido, significando que existe usuario logado se o retorno for true
  btnSair() {
    let ok = false
    let token = localStorage.getItem('token')
    let admin = localStorage.getItem('admin')

    if(token != null && admin == 'null') {
      ok = true
    }
    return ok
  }

  btnSairAdmin() {
    let ok = false
    let token = localStorage.getItem('token')
    let admin = localStorage.getItem('admin')

    if(token != null && admin != 'null') {
      ok = true
    }
    return ok
  }
  
  // metodo verifica se o localStorage na chave 'token' está vazio, significando que não há usuario logado se o retorno for true
  btnLogin() {
    let ok = false
    let token = localStorage.getItem('token')

    if(token == null) {
      ok = true
    }
    return ok
  }

}
