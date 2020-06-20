import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { PoliticaComponent } from './politica/politica.component';
import { FaqComponent } from './faq/faq.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { DeletarUsuarioComponent } from './deletar-usuario/deletar-usuario.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreComponent } from './sobre/sobre.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContatoComponent,
    PoliticaComponent,
    FaqComponent,
    CadastroComponent,
    ListaUsuariosComponent,
    EditarUsuarioComponent,
    DeletarUsuarioComponent,
    LoginComponent,
    ProdutosComponent,
    SobreComponent,
    CadastrarProdutoComponent,
    EditarProdutoComponent,
    DeletarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
