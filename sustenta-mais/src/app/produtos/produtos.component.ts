import { Component, OnInit, HostListener } from '@angular/core';
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
  
  ngOnInit(): void{

  this.getAllProdutos()
  
  let nome = this.route.snapshot.params['nome']
  this.findByNameProduto(nome);
}

  findByNameProduto(nome: string){
    this.produtosService.getByNameProduto(nome).subscribe((resp : Produtos)=>{
      this.produtos = resp
    })
  }

  pesquisarPorNome(){
    this.produtosService.findByNameProduto(this.nome).subscribe((resp: Produtos[])=>{
      this.listaProduto = resp
    })
  }

  getAllProdutos() {
    this.produtosService.findAllProdutos().subscribe((resp: Produtos[]) => {
      this.listaProduto = resp
    })
  }
}