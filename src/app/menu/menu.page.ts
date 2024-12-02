import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private router: Router
  ) {}

  async openScanner(): Promise<void> {
    
    const hasPermission = await this.requestCameraPermission();
    if (!hasPermission) {
      this.showPermissionAlert();
      return;
    }

    
    const modal = await this.modalController.create({
      component: BarcodeScanningModalComponent,
      componentProps: {
        formats: ['QR_CODE', 'EAN_13'], 
        lensFacing: 'back', 
      },
      cssClass: 'barcode-scanning-modal',
    });

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.barcode) {
        console.log('Código escaneado:', result.data.barcode.rawValue);
        
      }
    });

    await modal.present();
  }

  
  private async requestCameraPermission(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  
  private async showPermissionAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso denegado',
      message: 'Se necesita el permiso de cámara para usar el escáner de códigos.',
      buttons: ['OK'],
    });
    await alert.present();
  }
  navigateToQR() {
    this.router.navigate(['/qr']);
  }

  
  
}

