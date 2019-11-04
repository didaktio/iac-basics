import { Component, OnInit } from '@angular/core';
import { SomeServiceService } from '../@core/services/some-service.service';
import { BehaviorSubject } from 'rxjs';


/**
 * THIS PAGE DEMONSTRATES: Data Presentation (interpolation, ngFor, ngIf, hidden, ng-container...)
 */


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  myString$ = new BehaviorSubject('my string');

  hidden = true;
  notHidden = true;

  constructor(public ss: SomeServiceService) { }

  ngOnInit() {

  }

}
