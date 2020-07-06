import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from '../service/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: Produtos = new Produtos

  constructor(private produtoService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produtos) => {
      this.produto = resp
    })
  }
  comprarProduto() {
    this.produtoService.putProduto(this.produto).subscribe((resp: Produtos) => {
      this.produto = resp
      this.router.navigate(['/produtos'])
    })
  }
}
