import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //creating events we can EMIT or send.
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //define data of what we are emitting, put () at the end to call a constructor.
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    this.serverCreated.emit({ //emiting the object, setting what we are going to pass
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({ //emiting the object, setting what we are going to pass
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }
  
}
