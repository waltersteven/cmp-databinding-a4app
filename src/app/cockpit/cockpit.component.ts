import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //creating events we can EMIT or send.
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //define data of what we are emitting, put () at the end to call a constructor.
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef; //Local reference fetched via ViewChild. ElementRef type

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({ //emiting the object, setting what we are going to pass
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({ //emiting the object, setting what we are going to pass
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  
}
