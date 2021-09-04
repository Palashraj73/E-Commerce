import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from './message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems=[
    {product_image:"../../assets/samsung.jpg",product_name:"Samsung s21", product_description:"New samsung phone with new features", product_price:10000},
    {product_image:"../../assets/headphone.jpg",product_name:"Headphone", product_description:"boAt Rockerz 450 Bluetooth On-Ear Headphone with Mic", product_price:2000},
    
    {product_image:"../../assets/macbook.jpg",product_name:"Macbook", product_description:"New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Gold (Latest Model)", product_price:22000}
  ];
  
  cartTotal=0
  constructor(private msg:MessageService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.cartItems.forEach(item =>{
      this.cartTotal += item.product_price;
    })
  }
  
}
