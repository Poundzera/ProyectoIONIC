import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async Resetpass() {
    
    const alerta = await this.alertController.create({
      header: 'Éxito',
      message: 'La contraseña se restableció correctamente.',
      buttons: ['OK']
    });

    await alerta.present();


    alerta.onDidDismiss().then(() => {
      this.router.navigate(['/home']);
    });
  }
}
