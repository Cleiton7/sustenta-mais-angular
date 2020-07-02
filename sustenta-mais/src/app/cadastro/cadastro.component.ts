import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { Usuarios } from '../model/Usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuarios = new Usuarios

  confirmaSenha = "";

  alerta: boolean = false

  cadastroOk: boolean = false;

  constructor(
    private usuarioService: UsuariosService,
    private router: Router
    ) { }

  ngOnInit(){

    //Inclusão do Scroll top na componente

    window.scroll(0,0)

  }

  // metodo para validar a confirmação de senha no formulario de cadastro
  validaSenha(){
    if(this.usuario.senha == this.confirmaSenha){
      this.cadastroUsuario()
    }
  }

  // metodo para cadastro de usuario chamando o EndPoint postUsuario() da service
  cadastroUsuario() {
    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuarios) => {
      this.usuario = resp
      this.cadastroOk = true
      this.router.navigate(["login"]) // após o cadastro o usuario é redirecionado para a tela de login
      localStorage.setItem("cadastroOk", this.cadastroOk.toString()) // o valor booleano da variavel 'cadastroOk' é adicionado no localStorage em forma de string para ser usado na tela de login
    })
  }
}