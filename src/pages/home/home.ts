import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{RegulaDocumentReader} from '@ionic-native/regula-document-reader'
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private documentReader:RegulaDocumentReader,private file:File) {

  }

  doScan()
  
  {
    
    try {
    
    let license=this.file.applicationDirectory+ "www/regula.license";
    this.documentReader.initReader(license);
    this.documentReader.scanDocument().then((result)=>{     

    });


    
  } catch (error) {
   
    alert('some Error '+error);
  }
  };

}
