import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from '../model/Produtos';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto : Produtos = new Produtos

  constructor(private produtoService : ProdutosService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produtos)=>{
      this.produto = resp
    })
  }

  salvarProduto(){
    this.produtoService.putProduto(this.produto).subscribe((resp: Produtos)=>{
      this.produto = resp
      this.router.navigate(['/produtos'])
    })
  }

  cancelar() {
    this.router.navigate(['/produtos'])
  }

}
