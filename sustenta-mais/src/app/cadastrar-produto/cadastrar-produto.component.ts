import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto : Produtos = new Produtos

  constructor(private produtoService : ProdutosService, private router : Router) { }

  ngOnInit(){

    //Inclusão do Scroll top na componente
    
    window.scroll(0,0)
    this.verificaAtenticacao()
    
  }

  cadastroProduto() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produtos) => {
      this.produto = resp
      this.router.navigate(["produtos"])
    })
  }

  verificaAtenticacao() {
    let admin = localStorage.getItem('admin')

    if(admin != 'true') {
      this.router.navigate(['produtos'])
    }
  }

}
