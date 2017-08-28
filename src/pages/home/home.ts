import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username = "";
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }


  loginUser(): void {
    if (/^[a-zA-Z0-9]+$/.test(this.username)) {
      this.navCtrl.push('chatpage',
       {username : this.username});
    }
    else {
      this.showalert('Error', 'Invalid UserName');
    }
  }

  showalert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}

