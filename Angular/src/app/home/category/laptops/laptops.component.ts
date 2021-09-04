import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SubmitProductService } from 'src/app/submit-product.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  laptops: any;  
  constructor(private submitProduct: SubmitProductService, private route: ActivatedRoute) { }
  
  ngOnInit(): void{
    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params);
      }); 
      this.submitProduct.getProducts().subscribe((add:any) => {
        // console.log(add);
        this.laptops= add;
      });    
    }
}