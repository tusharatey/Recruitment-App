import { LightningElement } from 'lwc';

import createAccountRecord from "@salesforce/apex/AccountClass.createAccountRecord";

export default class CreateAccount extends LightningElement {



    objAccount = {'sobjectType' : 'Account'}
   

    saveButtonHandler(){
        this.objAccount.Name = this.template.querySelector('lightning-input[data-formfield="accountName"]').value;
        this.objAccount.Type = this.template.querySelector('lightning-input[data-formfield="accountType"]').value;
        
        createAccountRecord({ objAcc : this.objAccount})
        .then((result) => {
          this.result = result;
          this.error = undefined;
      })
      .catch((error) => {
          this.error = error;
          this.result = undefined;
      });
  
    
    }
}