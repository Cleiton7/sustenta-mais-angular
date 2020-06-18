import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  formasPag: String = "assets/images/formas-pagamento.png"

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter;

  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
