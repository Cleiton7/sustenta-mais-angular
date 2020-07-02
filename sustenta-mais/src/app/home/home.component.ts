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
    slidesPerView: 4,
    // Pontos de interrupção responsivos 
    breakpoints: {
      // quando a largura da janela é <= 320px     
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // quando a largura da janela é <= 480px     
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      // quando a largura da janela é <= 640px     
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      },

      // quando a largura da janela é <= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 30
      },

      // quando a largura da janela é <= 1440px
      1440: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  }

  listaProdutos: Produtos[]

  produtoBarato = []

  sustentabilidade: String = "assets/images/sustentabilidade.jpg"
  sustentabilidadeDois: String = "assets/images/sustentabilidade-dois.png"
  sustentabilidadeTres: String = "assets/images/sustentabilidade-tres.jpg"

  constructor(
    private serviceProduto: ProdutosService
  ) { }

  ngOnInit() {
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.serviceProduto.findAllProdutos().subscribe((resp: Produtos[]) => {
      this.listaProdutos = resp

      for (let i = 0; i < this.listaProdutos.length; i++) {
        if (this.listaProdutos[i].preco < 50) {
          this.produtoBarato.push(this.listaProdutos[i])
        }
      }
    })
  }
}
