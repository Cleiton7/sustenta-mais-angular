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

  token : string = localStorage.getItem('token')

  constructor(
    private usuarioService: UsuariosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.verificaAtenticacao()
  }

  // metodo para validar a confirmação de senha no formulario de cadastro
  validaSenha(){
    if(this.usuario.senha == this.confirmaSenha){
      this.cadastroUsuario()
    }
  }

  // metodo para cadastro de usuario chamando o EndPoint postUsuario() da service
  cadastroUsuario() {
    let admin = localStorage.getItem('admin')
    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuarios) => {
      this.usuario = resp
      this.cadastroOk = true
      
      if(admin === 'true'){
        this.router.navigate(["lista-usuarios"]) // após o cadastro o usuario é redirecionado para a tela de login
      }
      this.router.navigate(["login"])
      localStorage.setItem("cadastroOk", this.cadastroOk.toString()) // o valor booleano da variavel 'cadastroOk' é adicionado no localStorage em forma de string para ser usado na tela de login
    })
  }

  verificaAtenticacao() {
    let admin = localStorage.getItem('admin')
    let token = localStorage.getItem('token')

    if(admin != 'true' && token === 'null') {
      this.router.navigate(['produtos'])
    }
  }
}