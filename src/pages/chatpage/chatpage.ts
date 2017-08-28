import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'firebase/database';
import firebase from 'firebase';
/**
 * Generated class for the ChatpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'chatpage'
})
@Component({
  selector: 'page-chatpage',
  templateUrl: 'chatpage.html',
})
export class ChatpagePage {

  message: string = '';

  username: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.username = this.navParams.get('username');
  }

  ionViewDidLoad() {
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    });
  }

}
