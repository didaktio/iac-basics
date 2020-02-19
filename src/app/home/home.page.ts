import { Component, SimpleChanges } from '@angular/core';
import { SomeServiceService } from '../@core/services/some-service.service';


/**
 * THIS PAGE DEMONSTRATES: Lifecycles
 */

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ss: SomeServiceService) { }

  ngOnChanges(changes: SimpleChanges) {
    // Fired before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('ngOnChanges fired', { changes });
  }

  ngOnInit() {
    // Fired after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Fires ONCE.
    console.log('ngOnInit fired');
  }

  ngDoCheck() {
    // Fired every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    console.log('ngDoCheck fired');
  }

  ngAfterContentInit() {
    // Fired after ngOnInit when the component's or directive's content has been initialized.
    // Fires ONCE.
    console.log('ngAfterContentInit fired');
  }

  ngAfterContentChecked() {
    // Fired after every check of the component's or directive's content.
    console.log('ngAfterContentChecked fired');
  }

  ngAfterViewInit() {
    // Fired after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log('ngAfterViewInit fired');
  }

  ngAfterViewChecked() {
    // Fired after every check of the component's view. Applies to components only.
    console.log('ngAfterViewChecked fired');
  }

  ionViewWillEnter() {
    // Fired when the component is about to animate into view.
    // Fires ONCE.
    console.log('ionViewWillEnter fired');
  }

  ionViewDidEnter() {
    // Fired when the component has finished animating.
    // Fires ONCE.
    console.log('ionViewDidEnter fired');
  }

  ionViewWillLeave() {
    // Fired when the component routing from is about to animate.
    // Fires ONCE.
    console.log('ionViewWillLeave fired');
  }

  ionViewDidLeave() {
    // Fired when the component routing to has finished animating.
    // Fires ONCE.
    console.log('ionViewDidLeave fired');
  }

  ngOnDestroy() {
    // Fired before the instance is destroyed.
    // Fires ONCE.
    console.log('ngOnDestroy fired');
  }
}
