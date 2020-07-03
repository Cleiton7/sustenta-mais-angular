import { Component, OnInit, HostListener } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/Produtos';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  alert: boolean = false

  admin = false

  produtos: Produtos = new Produtos

  nome: string
  
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router,
    private locationPage: Location
    ) { }
  
  listaProduto: Produtos[]

  public paginaAtual = 1;
  
  ngOnInit(): void{
    this.verificaDelOk()
    this.verificaAutenticacao()
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

  verificaAutenticacao() {
    let adm: string = localStorage.getItem('admin')
    if(adm != 'null') {
      this.admin = true
    }
  }

  verificaDelOk() {
    let delOk: string = localStorage.getItem('delOk')
    if(delOk === 'true'){
      this.alert = true
      localStorage.removeItem('delOk')

      setTimeout(() => {
        this.refresh()
      }, 3000)
    }
  }

  refresh() {
    this.router.navigateByUrl('cadastro', {skipLocationChange: true}).then(() => {
      this.router.navigate([this.locationPage.path()])
    })
  }

}