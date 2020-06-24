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

}
