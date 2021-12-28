import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
modalOpen = false;
items = [
  {title: 'Why am I going to die?', content: 'Continue working!'},
  {title: 'What is the purpose of life?', content: 'Continue working!'},
  {title: 'Will I ever be happy?', content: 'Continue working!'},
]
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.modalOpen = !this.modalOpen;
  }
}
