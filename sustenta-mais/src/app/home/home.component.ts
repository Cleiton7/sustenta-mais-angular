import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sustentabilidade : String = "assets/images/sustentabilidade.jpg"
  sustentabilidadeDois : String = "assets/images/sustentabilidade-dois.jpg"
  sustentabilidadeTres : String = "assets/images/sustentabilidade-tres.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
