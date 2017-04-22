FRISoL 2017 UTN FRA
========================================
Aplicaciones Híbridas 
========================================
Prof. Octavio villegas  
# Ionic View ID: #
	*  85D37C42 
# Sitio firebase:  #
	* https://flisol-46dc5.firebaseapp.com/ 
# Pre-requisitos #

 se debe tener instalado :

* node.js (v6.9.1)	https://nodejs.org/es/
* android SDK 	https://developer.android.com/studio/index.html
* Instalar IONIC http://ionicframework.com/getting-started/  	
		npm install -g cordova ionic
* Firebase tools 	
		npm install -g firebase-tools


### Crear aplicaciones y verlas en un servidor ###

* ionic start ejemploUno tabs --v2
* ionic serve

### Agregarle una plataforma (android o ios) ###

* ionic platform add android
* ionic run --device


### Modificar la el icono y la presentación ###

* Obtener los templates
	- http://ionicframework.com/docs/v1/cli/icon-splashscreen.html
* editar los templates
	- https://www.photopea.com/
* pegar en la carpeta
	- \ejemploUno\resources
* ionic resources
* ionic run --device


### Directorio WWW ###

* que se genera 


### IONIC APP ###

* Creamos un cuenta
	- https://apps.ionic.io/apps/
* ionic upload
* Id de la aplicación
* Ionic View
	- http://view.ionic.io/
* Play Store
	- https://play.google.com/store/apps/details?id=com.ionic.viewapp



### Firebase ###

* Creamos un cuenta
	- https://firebase.google.com/
* Modificamos permisos
	- 1- ir al menú database.
	- 2- cambiar las reglas por estas:
		- Auth!=null por Auth==null 
* Configuración de Firebase en la aplicación


### AngularFire ###

* Documentación
	- https://github.com/angular/angularfire2
* npm install firebase angularfire2 --save
* modifico los archivos para leer de firebase


### Firebase hosting ###

* En el menú Hosting. de Firebase
	- comenzar
* npm install -g firebase-tools
	- 1-Crea un subdirectorio :
		- $mkdir firebasePublic
	- 2-Ingresa:
		- $cd firebasePublic
	- 3-Accede a Google:
		- $ firebase login
	- 4-Inicia tu proyecto:
		- $ firebase init
	- 5-Copia el contenido de ‘WWW’ dentro de ‘public’
	- 6-Implementa tu sitio web:
		- $ firebase deploy

### Autentificación Firebase ###

* Tutorial 
	- https://firebase.google.com/docs/auth/web/github-auth
*La configuración debe ser en simultaneo , ya que necesitamos información cruzada.* 


### IONIC Plugin ###

* https://cordova.apache.org/
* https://ionicframework.com/docs/native/

utilizados:

		- $ ionic plugin add cordova-plugin-flashlight 
		- $ npm install --save @ionic-native/flashlight

		- $ ionic plugin add cordova-plugin-vibration 
		- $ npm install --save @ionic-native/vibration

		- $ ionic plugin add cordova-plugin-device-motion 
		- $ npm install --save @ionic-native/device-motion



