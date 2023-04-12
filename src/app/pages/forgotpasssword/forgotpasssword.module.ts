import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpassswordPageRoutingModule } from './forgotpasssword-routing.module';

import { ForgotpassswordPage } from './forgotpasssword.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpassswordPageRoutingModule
  ],
  declarations: [ForgotpassswordPage],
  entryComponents:[]
})
export class ForgotpassswordPageModule {}
