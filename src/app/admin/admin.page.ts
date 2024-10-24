import { Component, OnInit } from '@angular/core';
import { ApicontrollerService } from '../Servicios/apicontroller.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  usuarios: any[] = [];
  constructor(private api: ApicontrollerService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.api.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data
        console.log(this.usuarios)
      },
      (error) => {
        console.log("Error en la llamada :" + error)
      });
  }
  modificarUsuario(id: any) {

  }

  eliminarUsuario(id: any) {
    
  }
}
