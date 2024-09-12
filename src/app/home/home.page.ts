import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private animationController: AnimationController) {}

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
      if (this.usuario.username.length >= 3) {
        if (this.usuario.password.length >=4){
          let navigationExtras: NavigationExtras = {
            state: {
              username: this.usuario.username,
              password: this.usuario.password,
            },
          };
          this.cambiarSpinner();
          setTimeout(() => {

            this.router.navigate(['/inicio'], navigationExtras);
            this.cambiarSpinner();
            this.mensaje = "";
          }, 2000);
        }else{
          console.log('Contraseña incorrecta');
          this.mensaje = 'Contraseña no cumple';
        }
      
      }else{
        console.log('Usuario incorrecto');
        this.mensaje = 'Usuario no cumple';
      }
    }

}
