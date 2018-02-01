import {Component, OnInit} from '@angular/core';
import {Material} from '../material';
import {MATERIALS} from '../mock-materials';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials = MATERIALS;
  selectedMaterial: Material;

  constructor() { }

  ngOnInit() {
  }

  onSelect(material: Material): void {
    this.selectedMaterial = material;
  }

}
