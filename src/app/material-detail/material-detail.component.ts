import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../material';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.css']
})
export class MaterialDetailComponent implements OnInit {

  @Input() material: Material;

  constructor() { }

  ngOnInit() {
  }

}
