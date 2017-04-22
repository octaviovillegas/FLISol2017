import { Component , OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit, OnDestroy {

    subscription:any;
    options:any;
    x:Number;
    y:number;
    z:number;
    pantallaAncho:number;
    pantallaAlto :number;
    arriba:number;
    izquierda:number;
    rutaDeFoto:any;
    anchoDeFoto:any;
    aceleracion:any;
  constructor(public navCtrl: NavController,private deviceMotion: DeviceMotion) {
    this.options={ frequency: 50 };
    this.pantallaAncho = window.screen.width;
    this.pantallaAlto = window.screen.height;
    this.rutaDeFoto="assets/img/robot_normal.png";
    this.anchoDeFoto=80;
  }
  ngOnInit()    {  
    this.arriba=0;
    this.izquierda=0;
    try {
          this.subscription = this.deviceMotion.watchAcceleration(this.options).subscribe((aceleracion: DeviceMotionAccelerationData) => {
            this.x= aceleracion.x;
            this.y= aceleracion.y;
            this.z= aceleracion.z; 

          });
    }catch(error)
    { console.log(error); }
       
   }
    ngOnDestroy() {
     this.subscription.unsubscribe(); 
    }  
}
