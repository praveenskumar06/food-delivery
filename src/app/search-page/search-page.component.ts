import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../_services/restaurant.service';
import { Restaurant } from '../_models/restaurant';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  keyword: string;
  restaurants: Restaurant[];
  rating: string;
  location: string;
  constructor(
    private restaurantService: RestaurantService) {

}

  ngOnInit(): void {
    this.rating = '0';
    this.location = '';
    this.keyword = '';
    this.restaurantService.getAll().subscribe(restaurants => this.restaurants = restaurants);
  }

  onSubmit() {
    this.restaurantService.getByRating(this.rating).subscribe(restaurants => this.restaurants = restaurants);
  }

  onSubmitLocation() {
    this.restaurantService.getByLocation(this.location).subscribe(restaurants => this.restaurants = restaurants);
  }

  onSubmitLocationAndRating() {
    this.restaurantService.getByLocationAndRating(this.rating, this.location).subscribe(restaurants => this.restaurants = restaurants);
  }

  onSearch() {
    this.restaurantService.getByKeyword(this.rating, this.keyword).subscribe(restaurants => this.restaurants = restaurants);
  }

}
