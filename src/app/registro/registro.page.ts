import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../Servicios/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    username: "",
    email: "",
    password: ""
  }
  constructor(private storage: StorageService, private router: Router) { }

  ngOnInit() {
  }
  
  registrar() {
    console.log(this.usuario)
    this.storage.set(this.usuario.username, this.usuario);
    this.router.navigate(['/home'])
  }
  
}
