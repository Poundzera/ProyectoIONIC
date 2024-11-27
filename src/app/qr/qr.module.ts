import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrPageRoutingModule } from './qr-routing.module';
import { QrPage } from './qr.page';

// Importa el módulo de la librería ng-qrcode
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrPageRoutingModule,
    QrCodeModule // Asegúrate de incluir la librería aquí
  ],
  declarations: [QrPage]
})
export class QrPageModule {}

