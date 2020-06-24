import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/Produtos';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {


  // Instancia um novo objeto do tipo Produtos
  produto : Produtos = new Produtos
  delOk: boolean = false;
  alerta: boolean = false

  // Importa as dependecias que usamos para implementar o método apagarProduto()
  constructor(private produtoService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // pega o Id do produto que é clicado clicado para apagar
    let id: number = this.route.snapshot.params['id']
    // chama a função que pega o objeto através do Id capturado anteriormente
    this.findById(id)

    let token = localStorage.getItem('token')

    if(token == null) {
      alert("Faça login para cadastrar um produto")
      this.router.navigate(['/login'])
    }
  }

  // método responsável por trazer do Banco de Dados o objeto tipo Produto que corresponde ao Id passado
  findById(id: number){
    // usando o produtoService que foi declarado no nosso construtor invocamos o endpoint 'getByIdProduto' da nossa service
    this.produtoService.getByIdProduto(id).subscribe((resp: Produtos) => {
      this.produto = resp; // nosso objeto produto instanciado na linha 14 recebe o objeto Produto vindo do banco de dados
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`) // tratativa de erro caso o id nao for capturado
    })
  }

  // método para apagar o produto que foi clicado
  deletarProduto() {
    // usando o produtoService que foi declarado no nosso construtor invocamos o endpoint 'deleteProduto' da nossa service
    this.produtoService.deleteProduto(this.produto.id).subscribe(() => {
      this.delOk = true // seta um novo valor para a variavel 'delOk' criada na linha 15
      this.router.navigate(['/produtos']) // redireciona para a lista de produtos após a deleção
      localStorage.setItem("delOk", this.delOk.toString()) // armazena no localStorage do site o valor do booleano delOk e transforma em string usando o metodo toString
    })
  }

  naoDeletar(){
    this.router.navigate(['/produtos']) // redireciona para a lista de produtos caso escolha nao apagar o produto
  }
}
