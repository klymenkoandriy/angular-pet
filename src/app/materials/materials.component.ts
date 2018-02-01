import {Component, OnInit} from '@angular/core';
import {Material} from '../material';
import {MaterialService} from '../material.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: Material[];
  selectedMaterial: Material;

  constructor(private materialService: MaterialService) { }

  ngOnInit() {
    this.getMaterials();
  }

  onSelect(material: Material): void {
    this.selectedMaterial = material;
  }

  getMaterials(): void {
    this.materialService.getMaterials()
      .subscribe(materials => this.materials = materials);
  }

}
