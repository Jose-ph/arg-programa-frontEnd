import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo-prog',
  templateUrl: './logo-prog.component.html',
  styleUrls: ['./logo-prog.component.css']
})
export class LogoProgComponent implements OnInit {
  isLogged = false;

  constructor() { }

  ngOnInit(): void {
  
  }

 
  
}
