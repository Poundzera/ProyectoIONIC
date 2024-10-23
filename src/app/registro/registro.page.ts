import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../Servicios/storage.service';
import { AuthenticatorService } from '../Servicios/authenticator.service';
import { ToastController } from '@ionic/angular';

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
  constructor(private toastController: ToastController, private router: Router, private auth: AuthenticatorService) { }

  ngOnInit() {
  }
  
    async registrar() {
      this.auth
        .registrar(this.usuario)
        .then((res) => {
          this.router.navigate(['/home']);
          return this.toastController.create({
            message: 'Registrado con exito',
            duration: 5000,
            position: 'bottom',
          });
        })
        .then((toast) => toast.present())
        .catch((error) => {
          return this.toastController
            .create({
              message: 'Error al registrar',
              duration: 5000,
              position: 'bottom',
            })
            .then((toast) => toast.present());
        });
    }
  }
