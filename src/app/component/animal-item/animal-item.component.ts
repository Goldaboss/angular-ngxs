import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss']
})
export class AnimalItemComponent implements OnInit {


  @Input() animal: string

  constructor() { }

  ngOnInit(): void {
  }

}
