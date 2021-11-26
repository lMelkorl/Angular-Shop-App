import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-proudct-add-forms1',
  templateUrl: './proudct-add-forms1.component.html',
  styleUrls: ['./proudct-add-forms1.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProudctAddForms1Component implements OnInit {

  constructor(private categoryService:CategoryService,private productService:ProductService,private alertifyService:AlertifyService) { }
  model:Product = new Product();
  categories!:Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
  })
}

add(form:NgForm){
  this.productService.addProduct(this.model).subscribe(data=>{
    this.alertifyService.success(data.name + ' is added succesfuly')
  })
}

}
