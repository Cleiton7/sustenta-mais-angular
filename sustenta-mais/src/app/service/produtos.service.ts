import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  findAllProdutos() {
    return this.http.get(`http://localhost:8080/produtos`)
  }

  getByIdProduto(id: number) {
    return this.http.get(`http://localhost:8080/produtos/${id}`)
  }

  getByNameProduto(nome: string) {
    return this.http.get(`http://localhost:8080/produtos/nome/${nome}`)
  }

  postProduto(produto: Produtos) {
    return this.http.post('http://localhost:8080/produtos', produto)
  }

  putProduto(produto: Produtos) {
    return this.http.put('http://localhost:8080/produtos', produto)
  }

  deleteProduto(id: number) {
    return this.http.delete(`http://localhost:8080/produtos/${id}`)
  }
}
