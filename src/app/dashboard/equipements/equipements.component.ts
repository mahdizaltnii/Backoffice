import { Component, OnInit } from '@angular/core';
import { Equipement } from 'src/app/models/equipment';
import { EquipmentsService } from 'src/app/services/equipments.service';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.css']
})
export class EquipementsComponent implements OnInit {
  
  equipments: Equipement[] = [];
  selectedEquipment: Equipement = {} as Equipement;

  constructor(private equipementService: EquipmentsService) { }

  ngOnInit() {
    this.getEquipments();
  }

  getEquipments(): void {
    this.equipementService.getEquipments()
      .subscribe(equipments => {
        console.log(equipments);
        this.equipments = equipments
      }
        );
  }

  addEquipment(equipment: Equipement): void {
    this.equipementService.addEquipment(equipment)
      .subscribe(() => this.getEquipments());
  }

  UpdateEquipment(equipment: Equipement): void {
    this.equipementService.UpdateEquipment(equipment.idEquipment, equipment)
      .subscribe(() => this.getEquipments());
  }

  deleteEquipment(id: number) {
    this.equipementService.deleteEquipment(id).subscribe(res => { console.log(res)});
  }

  onSelect(equipment: Equipement): void {
    this.selectedEquipment = equipment;
  }

  clearSelection(): void {
    this.selectedEquipment = {} as Equipement;
  }

}
