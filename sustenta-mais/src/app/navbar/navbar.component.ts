import { Component, OnInit, Renderer2, ElementRef, Query } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faWater } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faWater = faWater;
  constructor() { }

  ngOnInit(): void {
  }

}
