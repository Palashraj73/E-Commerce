import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubmitProductService {
  

  constructor(private webReqService: WebRequestService) { }

  cart(
    product_name:String,
    product_price:Number,
  ){
    return this.webReqService.post('cart',{
      product_name,
      product_price
    })
  }

  addNewProduct(
    product_image:String,
    product_name:String,
    product_category:String,
    product_price:Number,
    product_rating:String,
    total_product_bought:Number,
    total_product_reviews:String,
    product_description:String
    ){
    return this.webReqService.post('add',{
    product_image,
    product_name,
    product_category,
    product_price,
    product_rating,
    total_product_bought,
    total_product_reviews,
    product_description
    });
  }
  getProducts(){
    return this.webReqService.get('add');
  }
  // edit
  getCart(){
    return this.webReqService.get('cart');
  }
  // API url
  baseApiUrl = ""
    
  // constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload(file:any):Observable<any> {
  
      // Create form data
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("file", file, file.name);
        
      // Make http post request over api
      // with formData as req
      return this.webReqService.post(this.baseApiUrl, formData)
  }
}
