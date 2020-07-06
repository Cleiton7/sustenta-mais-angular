import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PoliticaComponent } from './politica/politica.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { DeletarUsuarioComponent } from './deletar-usuario/deletar-usuario.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'politica', component: PoliticaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'lista-usuarios', component: ListaUsuariosComponent },
  { path: 'editar/:id', component: EditarUsuarioComponent },
  { path: 'deletar/:id', component: DeletarUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'cadastrar-produto', component: CadastrarProdutoComponent },
  { path: 'editar-produto/:id', component: EditarProdutoComponent },
  { path: 'deletar-produto/:id', component: DeletarProdutoComponent },
  { path: 'produtos/nome/:nome', component: ProdutosComponent },
  { path: 'detalhes-produto/:id', component: DetalhesProdutoComponent },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
