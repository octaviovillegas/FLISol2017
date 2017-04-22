import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private flashlight: Flashlight) {

  }
  encender(){
    console.log("encender");
    if(this.flashlight.available())
      this.flashlight.switchOn();
      else
      console.log("no tenes linterna");
  }
  apagar(){
    console.log("apagar");
     if(this.flashlight.available())
      this.flashlight.switchOff();
      else
      console.log("no tenes linterna");
    
  }
}
