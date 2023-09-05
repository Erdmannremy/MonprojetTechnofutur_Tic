import { Component } from '@angular/core';
import { Product } from 'src/app/shared/Models/product';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  newProductName : string = '';
  newProductDescription : string = '';
  newProductPrice : number = 0;

  constructor(public productService : ProductServiceService){}

  deleteProduct(id : number) : void {
    this.productService.deleteProduit(id)
  }

  addProduct(){
    // const newProduct : Product = {
    //   id :
    // }
  }

  editProduct(product : Product) : void {

  }

  // get Id
}
