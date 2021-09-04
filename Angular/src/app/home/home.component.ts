import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MessageService } from '../cart/message.service';
import { SubmitProductService } from '../submit-product.service';
// import {MessageService} from '../cart/message.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getting: any;  
  cartService: any;
  constructor(
     private submitProduct: SubmitProductService,
     private route: ActivatedRoute, 
     private msg:MessageService) { }
  
  ngOnInit(): void{
    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params);
      }); 
      this.submitProduct.getProducts().subscribe((add:any) => {
        // console.log(add);
        this.getting= add;
      });    
    }
    // addToCart(product) {
    //   this.cartService.addToCart(product);
    //   window.alert('Your product has been added to the cart!');
    // }
  } 