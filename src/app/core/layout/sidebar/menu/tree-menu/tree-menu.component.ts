import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.css']
})
export class TreeMenuComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}
