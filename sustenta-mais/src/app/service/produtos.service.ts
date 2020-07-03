import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  // pega o token do localStorage depois de fazer o login
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  findAllProdutos() {
    return this.http.get(`http://localhost:8080/produtos`)
  }

  getByIdProduto(id: number) {
    return this.http.get(`http://localhost:8080/produtos/${id}`, this.token)
  }

  getByNameProduto(nome: string) {
    return this.http.get(`http://localhost:8080/produtos/nome/${nome}`)
  }

  postProduto(produto: Produtos) {
    return this.http.post('http://localhost:8080/produtos', produto, this.token)
  }

  putProduto(produto: Produtos) {
    return this.http.put('http://localhost:8080/produtos', produto, this.token)
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:8080/produtos/${id}`, this.token)
  }
}