import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from '../service/produtos.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // implementação do carrosel de produtos
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    slidesPerView: 4
  }

  listaProdutos: Produtos[]

  produtoBarato = []

  sustentabilidade : String = "assets/images/sustentabilidade.jpg"
  sustentabilidadeDois : String = "assets/images/sustentabilidade-dois.jpg"
  sustentabilidadeTres : String = "assets/images/sustentabilidade-tres.jpg"

  constructor(
    private serviceProduto : ProdutosService
  ) { }

  ngOnInit() {
    this.findAllProdutos()

    // Inclusão do ScrollTop na componente

    window.scroll(0,0)

  }
  
  findAllProdutos() {
    this.serviceProduto.findAllProdutos().subscribe((resp: Produtos[]) => {
      this.listaProdutos = resp

      for(let i = 0; i < this.listaProdutos.length; i++){
        if(this.listaProdutos[i].preco < 50){
          this.produtoBarato.push(this.listaProdutos[i])
        }
      }
    })
  }
}
