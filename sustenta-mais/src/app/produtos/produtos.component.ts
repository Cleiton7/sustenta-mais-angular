import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produtos = new Produtos

  nome: string
  
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private router: Router) { }
  
  listaProduto: Produtos[]

  public paginaAtual = 1;
  
  ngOnInit(): void{
  
  this.getAllProdutos()
  
    let token = localStorage.getItem('token')
    if(token == null) {
      alert('Faça login')
      this.router.navigate(['/login'])
    }

    this.getAllProdutos()
    
    let nome = this.route.snapshot.params['nome']
    this.pesquisarPorNome();
}

  pesquisarPorNome(){
    this.produtosService.getByNameProduto(this.nome).subscribe((resp: Produtos[])=>{
      this.listaProduto = resp
    })
  }

  getAllProdutos() {
    this.produtosService.findAllProdutos().subscribe((resp: Produtos[]) => {
      this.listaProduto = resp
    })
  }
}