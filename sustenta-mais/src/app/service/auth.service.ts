import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuarios } from '../model/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  logar(usuarioLogin: UsuarioLogin) {
    return this.http.post('http://localhost:8080/usuario/login', usuarioLogin)
  }

  cadastrar(usuario: Usuarios) {
    return this.http.post('http://localhost:8080/usuario', usuario)
  }

  // metodo verifica se o localStorage na chave 'token' está preenchido, significando que existe usuario logado
  btnSair() {
    let ok = false
    let token = localStorage.getItem('token')

    if(token != null) {
      ok = true
    }
    return ok
  }
  
  // metodo verifica se o localStorage na chave 'token' está vazio, significando que não há usuario logado
  btnLogin() {
    let ok = false
    let token = localStorage.getItem('token')

    if(token == null) {
      ok = true
    }
    return ok
  }

}
