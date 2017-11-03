import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //To expose our style to every component, Emulated is the default, alternatives: None, Native.
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  //With Input we expose the element property to the others components in order to RECEIVE data from app.component.html. 
  //The string passed works as an alias, now you have to use it, 'element' will no longer work.
  @Input('srvElement') element:  {type: string, name: string, content: string}; //Javascript object.
  @Input() name: string;
  @ViewChild('heading') header: ElementRef; //heading is the name of the local reference in server-element.html

  constructor() {
    console.log('constructor called!');
   }
  
  ngOnChanges(changes: SimpleChanges){ //Called after a bound input property changed.
    console.log('ngOnChanges called!');
    console.log(changes);    
  }

  ngOnInit() { //Called once the component is initialized.
    console.log('ngOnInit called!');
    console.log('Text content:' + this.header.nativeElement.textContent);
        
  }

  ngDoCheck(){ //Called every change detection run
    console.log('ngDoCheck called!');    
  }

  ngAfterContentInit(){ //Called after ng-content has been projected into view.
    console.log('ngAfterContentIinit called!');    
  }

  ngAfterContentChecked(){ //Called everytime the projected content has been checked.
    console.log('ngAfterContentChecked called!');    
  }

  ngAfterViewInit(){ //Called after the component's view has been initialized.
    console.log('ngAfterViewInit called!');
    console.log('Text content:' + this.header.nativeElement.textContent);    
  }

  ngAfterViewChecked(){ //Called everytime the view has been checked.
    console.log('ngAfterViewChecked called!');    
  }

  ngOnDestroy(){ //Called when something is removed from the DOM, in the example we removed the element of the array, so when page load it doesn't find it.
    console.log('ngOnDestroy called!');    
  }

}
