import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../model/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getAllUsuarios() {
    return this.http.get('http://localhost:8080/usuario')
  }

  postUsuario(usuario: Usuarios) {
    return this.http.post('http://localhost:8080/usuario', usuario)
  }

  putUsuario(usuario: Usuarios) {
    return this.http.put('http://localhost:8080/usuario', usuario)
  }

  getByIdUsuario(id: number){
    return this.http.get(`http://localhost:8080/usuario/${id}`)
  }

  deleteUsuario(id: number) {
    return this.http.delete(`http://localhost:8080/usuario/${id}`)
  }
}
