import { Component } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage {
  textQR: string = ''; // Variable para almacenar el texto del QR

  generarQRCode() {
    if (this.textQR.trim()) {
      console.log('Texto para el QR:', this.textQR);
    } else {
      console.log('Por favor ingrese un texto para generar el QR.');
    }
  }
}
