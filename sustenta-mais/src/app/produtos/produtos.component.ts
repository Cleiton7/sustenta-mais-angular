import { Component, OnInit } from '@angular/core';
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
  
  ngOnInit(){

    //Inclusão do Scroll top na componente
    window.scroll(0,0)
  
    this.verificaDelOk()
    this.verificaAutenticacao()

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

  // Este método sobe ao início da página de produtos, ao trocar a página
  trocaPagina() {
    window.scroll(0,0);
}
}