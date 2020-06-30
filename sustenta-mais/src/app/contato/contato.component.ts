import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import {faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faEnvelopeOpenText = faEnvelopeOpenText
  faPhoneSquare = faPhoneSquare
  faWhatsapp = faWhatsapp
  constructor() { }

  ngOnInit(): void {
  }

}
