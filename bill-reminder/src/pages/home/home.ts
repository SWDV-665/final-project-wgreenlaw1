import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BillReminderServiceProvider } from '../../providers/bill-reminder-service/bill-reminder-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Bill Reminder";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: BillReminderServiceProvider, public inputDialogService: InputDialogServiceProvider) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);  
  }

  editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }  

  addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }



}