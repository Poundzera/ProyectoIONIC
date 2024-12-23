import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { AuthenticatorService } from '../Servicios/authenticator.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private animationController: AnimationController,
              private auth: AuthenticatorService) {}

    usuario = {
      username :"",
      password :"",
    }
    mensaje ="";
    spinner = false;
    cambiarSpinner() {
      this.spinner = !this.spinner;
    }
    validar() {
        this.auth
        .loginBDD(this.usuario.username, this.usuario.password)
        .then((res) => {
        this.mensaje = 'Conexion exitosa';
        let navigationExtras: NavigationExtras = {
          state: {
            username: this.usuario.username,
            password: this.usuario.password,
          },
        };
        this.cambiarSpinner();
        setTimeout(() => {
          this.router.navigate(['/menu'], navigationExtras);
          this.cambiarSpinner();
          this.mensaje = '';
        }, 2000);
      })
      .catch((error) => {
        this.mensaje = 'Error en las credenciales';
      });
  
    }

}
