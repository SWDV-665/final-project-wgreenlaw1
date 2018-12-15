import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { BillReminderServiceProvider } from '../../providers/bill-reminder-service/bill-reminder-service';

/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertCtrl: AlertController, public dataService: BillReminderServiceProvider) {
    console.log('Hello InputDialogServiceProvider Provider');
  }


  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item' : 'Add Item',
      message: item ? "Please edit item..." : "Please enter item...",
      inputs: [
        {
          name: 'bill',
          placeholder: 'Bill Name/Description',
          value: item ? item.name : null
        },
        {
          name: 'amount',
          placeholder: 'Amount/Cost (e.g., $50.00)',
          value: item ? item.quantity : null
        },
        {
          name: 'date',
          placeholder: 'Due Date (i.e., MM/DD/YYYY)',
          value: item ? item.quantity : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }

          }
        }
      ]
    });
    prompt.present();
  }

}