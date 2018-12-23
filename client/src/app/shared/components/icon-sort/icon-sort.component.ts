import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-sort',
  templateUrl: './icon-sort.component.html',
  styleUrls: ['./icon-sort.component.less']
})
export class IconSortComponent implements OnInit {
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}
