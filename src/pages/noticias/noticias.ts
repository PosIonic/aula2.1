import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  public teste : String = "Pedro!!";
  public numero : number;
  public qualquerCoisa : any;

  public testaFuncao():void{
    alert("Vamos aprender Ionic!")
  }


 public testaFuncaoComParametros(a:number, b:number):number{
    return(a+b);
  }



  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    alert("Soma= "+this.testaFuncaoComParametros(2,3));
    
    console.log('ionViewDidLoad NoticiasPage');
  }

}
