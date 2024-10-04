import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../Servicios/storage.service';
import { AuthenticatorService } from '../Servicios/authenticator.service';
import { AlertController } from '@ionic/angular';

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
  constructor(private alertController: AlertController, private router: Router, private auth: AuthenticatorService) { }

  ngOnInit() {
  }
  
  registrar() {
    this.auth.registrar(this.usuario);
    const alerta = await this.alertController.create({
      header: 'Éxito',
      message: 'Se registró correctamente.',
      buttons: ['OK']
    });

    await alerta.present();


    alerta.onDidDismiss().then(() => {
      this.router.navigate(['/home']);
    });
  }
  
  
}
