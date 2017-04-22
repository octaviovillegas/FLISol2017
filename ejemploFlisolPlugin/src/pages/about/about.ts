import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    tiempo:any;
  constructor(public navCtrl: NavController, private vibration: Vibration) {
    this.tiempo=1000;
  }
  vibrar(){
    console.log("vibrar"+this.tiempo);

    try {
      this.vibration.vibrate(parseInt(this.tiempo));
    } catch (error) {
      console.info("error",error);
    }
    
  }
}
