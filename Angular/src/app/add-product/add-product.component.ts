import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubmitProductService } from '../submit-product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  @ViewChild('f') focus!:NgForm;
  
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file=null; // Variable to store file
  
  
  constructor(private submitProductService:SubmitProductService, ) { }
  onSubmit(){
    console.log(this.focus);
    this.focus.reset();
  }
  
  ngOnInit(){}
  // to store the data on add product 
  onClick(
    product_image:String,
    product_name:String,
    product_category:String,
    product_price:Number,
    product_rating:String,
    total_product_bought:Number,
    total_product_reviews:String,
    product_description:String
    ){
      this.submitProductService.addNewProduct(
        product_image,
        product_name,
        product_category,
        product_price,
        product_rating,
        total_product_bought,
        total_product_reviews,
        product_description
        ).subscribe((response:any)=>{
          console.log(response);
        })
      }


      // On file Select
      onChange(event:any) {
        this.file = event.target.files[0];
      }
      
      // OnClick of button Upload
      onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.submitProductService.upload(this.file).subscribe(
          (event: any) => {
            if (typeof (event) === 'object') {
              
              // Short link via api response
              this.shortLink = event.link;
              
              this.loading = false; // Flag variable 
            }
          }
          );
        }
      }
      