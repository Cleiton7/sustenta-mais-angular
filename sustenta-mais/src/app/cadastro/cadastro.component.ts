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

  ngOnInit(): void {
  }

  validaSenha(){
    if(this.usuario.senha == this.confirmaSenha){
      this.cadastroUsuario()
    }
  }

  cadastroUsuario() {
    this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuarios) => {
      this.usuario = resp
      this.cadastroOk = true
      this.router.navigate(["login"])
      localStorage.setItem("cadastroOk", this.cadastroOk.toString())
    })
  }
}