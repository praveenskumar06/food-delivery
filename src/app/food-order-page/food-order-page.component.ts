import { Component, OnInit } from '@angular/core';
import { Food } from '../_models/food';
import { FoodService } from '../_services/food.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Orders } from '../_models/orders';
@Component({
  selector: 'app-food-order-page',
  templateUrl: './food-order-page.component.html',
  styleUrls: ['./food-order-page.component.css']
})
export class FoodOrderPageComponent implements OnInit {

  foods: Food[];
  id: string;
  count$: number;
  foodKeyword: string;
  amount: number;
  orders: Orders[];
  quantity: number[];

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute) {
      this.count$ = 0;
      this.amount = 0;
     }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id =  params.get('id');
      this.foodService.getAll(this.id).subscribe(values => this.foods = values);
    });
  }

  onSubmit() {
    this.foodService.getByKeyword(this.id, this.foodKeyword).subscribe(values => this.foods = values);
  }

  onIncrement(food: Food): void {
    this.count$ += 1;
    // this.calculatedAmount(food);
    }

    onDecrement(food: Food): void {
    this.count$ -= 1;
    if (this.count$ < 0){
      this.count$ = 0;
    }
    // this.calculatedAmount(food);
    }

  reset(food: Food): void {
    this.count$ = 0;
    this.amount = 0;
    // this.calculatedAmount(food);
  }

  calculatedAmount(index: number): void{
    this.quantity[index] = this.count$;
    // this.amount += food.foodPrice * this.count$;
  }

}
