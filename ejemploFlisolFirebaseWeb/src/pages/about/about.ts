import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//para firebase
import { AngularFire,FirebaseListObservable ,FirebaseAuthState,AngularFireAuth } from 'angularfire2';
//import { FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
       private authState: FirebaseAuthState;
	usuario:string;
	mensaje:string;
	//para firebase
	listadosDeMensajes: FirebaseListObservable<any[]>;
  listadosDeMensajesParaMostrar: any;

  constructor(public navCtrl: NavController ,public objAngularFire: AngularFire ,public auth$: AngularFireAuth) {
  	//para firebase
    this.usuario="anonimo";
    this.listadosDeMensajes = this.objAngularFire.database.list('/mensajes');
    this.authState = auth$.getAuth();
   
    if ( this.authState) {
     // this.listadosDeMensajes = this.objAngularFire.database.list('/mensajes');
  	 // this.usuario=this.authState.auth.displayName;
      console.info("usuario",this.authState);
    } else {
      console.info("no Registrado",this.authState);
      //this.navCtrl.push(LoginPage);
    }  
  }
   EnviarMensaje(){
      
    
      var fechaActual=new Date().toJSON();
      this.listadosDeMensajes.push({usuario:this.usuario, mensaje:this.mensaje, fecha:fechaActual});
      this.mensaje="";
  }
  //https://github.com/angular/angularfire2/blob/master/docs/Auth-with-Ionic2.md
  logOut(){
    this.listadosDeMensajes = null;
    //this.navCtrl.push(LoginPage); 
   // this.auth$.logout();
  }

}
