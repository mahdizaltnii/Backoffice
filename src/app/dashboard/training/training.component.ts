import {Component, OnInit} from '@angular/core';
import {Training} from "../modal/training";
import {FormationService} from "../services/formation.service";


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})


export class TrainingComponent {

  listProducts : any;
  form : boolean = false;
  training!: Training;
  closeResult! : string;

  constructor(private productService : FormationService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getTrainingList().subscribe(res => this.listProducts = res)
  }

  addProduct(p: any){
    this.productService.addTraining(p).subscribe(() => {
      this.getAllProducts();
      this.form = false;
    });
  }

  editProduct(product : Training){
    this.productService.updateTraining(product).subscribe();
  }
  deleteProduct(idProduct : any){
    this.productService.deleteTraining(idProduct).subscribe(() => this.getAllProducts())
  }





  closeForm(){
// Logic to close the form
  }

  cancel(){
    this.form = false;
  }
}
