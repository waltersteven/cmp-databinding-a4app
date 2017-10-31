import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //With Input we expose the element property to the others components. 
  //The string passed works as an alias, now you have to use it, 'element' will no longer work.
  @Input('srvElement') element: {type: string, name: string, content: string}; //Javascript object.

  constructor() { }

  ngOnInit() {
  }

}
