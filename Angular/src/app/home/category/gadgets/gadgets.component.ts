import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SubmitProductService } from 'src/app/submit-product.service';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.css']
})
export class GadgetsComponent implements OnInit {
  gadgets: any;  
  constructor(private submitProduct: SubmitProductService, private route: ActivatedRoute) { }
  
  ngOnInit(): void{
    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params);
      }); 
      this.submitProduct.getProducts().subscribe((add:any) => {
        // console.log(add);
        this.gadgets= add;
      });    
    }
}