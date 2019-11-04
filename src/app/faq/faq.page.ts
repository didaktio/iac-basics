import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';


/**
 * THIS PAGE DEMONSTRATES: Ionic Grid, IonContent
 */



@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FAQPage implements OnInit {

  @ViewChild('content', { static: true }) content: IonContent;

  constructor() { }

  ngOnInit() {
  }


  scrollTo(id: string) {
     const el = document.getElementById(id);
     const elPos = el.getBoundingClientRect();
     el.style.borderBottom = '3px solid #FFA500';
     setTimeout(() => el.style.backgroundColor = '', 10000);
     this.content.scrollByPoint(elPos.left, elPos.top - 70, 1000);
   }
}
