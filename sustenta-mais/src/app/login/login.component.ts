import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/Usuarios';
import { Router } from '@angular/router';
import { UsuariosService } from '../service/usuarios.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuarios  = new Usuarios

  listaUsuarios: Usuarios []

  confirmaSenha = "";

  constructor(private router : Router, private usuarioService : UsuariosService) { }

  ngOnInit(): void {
  }

  validaUsuario(){
      
      // this.usuarioService.getAllUsuarios()

      this.usuarioService.getAllUsuarios().subscribe((resp : Usuarios []) => {
          const objUser = this.usuario
          const arrayUser = Object.entries(objUser).map(([type, value]) => ({type, value}));
          // console.log(arrayUser)

          this.listaUsuarios = resp
          const obj = this.listaUsuarios
          const array = Object.entries(obj).map(([type, value]) => ({type, value}));
          console.log(array)

          for(let i = 0; i < array.length; i++){
              let emailBanco = array[i].value.email
              let senhaBanco = array[i].value.senha
              console.log(emailBanco)
              for(let j = 0; j < arrayUser.length; j++){
                  let emailUser = this.usuario.email
                  let senhaUser = this.usuario.senha
                  // console.log(emailBanco)
                  // console.log(senhaBanco)
                  if(emailBanco == emailUser && senhaBanco == senhaUser){
                      console.log(emailBanco)
                      console.log(senhaBanco)
                      this.router.navigate(["lista-usuarios"])
                  }
                  j+=1 
              }
          } 
            // if(this.usuario.email == resp.email && this.usuario.senha == resp.senha){
            //   console.log(this.usuario)
            // }
      })
  }
}
