import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request.service';
// import {Subject}  from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  // subject= new Subject()

  constructor(private webReqService: WebRequestService) { }

    items = [];
  
    addToCart(product:any) {
      this.items.push();
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
  }




  // sendMsg(product:String){
  //   console.log(product)
  //   this.subject.next(product); 
  // }
  // getMesg(){
  //   return this.subject.asObservable()
  // }

