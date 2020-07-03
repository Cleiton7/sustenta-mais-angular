import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios } from '../model/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  // pega o token do localStorage depois de fazer o login
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllUsuarios() {
    return this.http.get('http://localhost:8080/usuario', this.token)
  }

  postUsuario(usuario: Usuarios) {
    return this.http.post('http://localhost:8080/usuario', usuario)
  }

  putUsuario(usuario: Usuarios) {
    return this.http.put('http://localhost:8080/usuario', usuario, this.token)
  }

  getByIdUsuario(id: number){
    return this.http.get(`http://localhost:8080/usuario/${id}`, this.token)
  }

  deleteUsuario(id: number) {
    return this.http.delete(`http://localhost:8080/usuario/${id}`, this.token)
  }
}
