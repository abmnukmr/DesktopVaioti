import {Component, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {




  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  lice:any = 10;


   item:any=[{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"},{"name":"mdsbmsdbfmsd"}]
  constructor(public navCtrl: NavController) {



  }



/*cheksc() {
  this.content.ionScroll.subscribe(($event: any) => {
    let scrollTop: number = $event.scrollTop;

    if(scrollTop>150){

     this.item.push( {"name":"aweewae"} );

      this.content.scrollToBottom()
    }

  });

}
*/


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.item.push({"name":"jfjhfjhfjhfjhfjhfjhfjhfjhf"});
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 100);
  }

}
