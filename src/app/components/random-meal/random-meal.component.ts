import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { GetRandomMealService } from 'src/app/services/get-random-meal.service';

@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrls: ['./random-meal.component.scss']
})
export class RandomMealComponent implements OnInit {
  randomMeal: any;
  listIngredients: string[] = [];
  safeUrl: any;
  constructor(private getRandomMealService: GetRandomMealService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.getRandomMeal();
  }

  getRandomMeal() {
    this.getRandomMealService.getRandomMeal().subscribe(data => {
      this.randomMeal = data.meals[0];
      console.log(this.randomMeal);
      this.getListOfIngredients();
    })
  }

  getListOfIngredients() {
    if (this.randomMeal.strIngredient1 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure1} of ${this.randomMeal.strIngredient1}`);
    }

    if (this.randomMeal.strIngredient2 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure2} of ${this.randomMeal.strIngredient2}`);
    }

    if (this.randomMeal.strIngredient3 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure3} of ${this.randomMeal.strIngredient3}`);
    }

    if (this.randomMeal.strIngredient4 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure4} of ${this.randomMeal.strIngredient4}`);
    }

    if (this.randomMeal.strIngredient5 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure5} of ${this.randomMeal.strIngredient5}`);
    }

    if (this.randomMeal.strIngredient6 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure6} of ${this.randomMeal.strIngredient6}`);
    }

    if (this.randomMeal.strIngredient7 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure7} of ${this.randomMeal.strIngredient7}`);
    }

    if (this.randomMeal.strIngredient8 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure8} of ${this.randomMeal.strIngredient8}`);
    }

    if (this.randomMeal.strIngredient9 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure9} of ${this.randomMeal.strIngredient9}`);
    }

    if (this.randomMeal.strIngredient10 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure10} of ${this.randomMeal.strIngredient10}`);
    }

    if (this.randomMeal.strIngredient11 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure11} of ${this.randomMeal.strIngredient11}`);
    }

    if (this.randomMeal.strIngredient12 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure12} of ${this.randomMeal.strIngredient12}`);
    }

    if (this.randomMeal.strIngredient13 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure13} of ${this.randomMeal.strIngredient13}`);
    }

    if (this.randomMeal.strIngredient14 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure14} of ${this.randomMeal.strIngredient14}`);
    }

    if (this.randomMeal.strIngredient15 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure15} of ${this.randomMeal.strIngredient15}`);
    }

    if (this.randomMeal.strIngredient16 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure16} of ${this.randomMeal.strIngredient16}`);
    }

    if (this.randomMeal.strIngredient17 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure17} of ${this.randomMeal.strIngredient17}`);
    }

    if (this.randomMeal.strIngredient18 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure18} of ${this.randomMeal.strIngredient18}`);
    }

    if (this.randomMeal.strIngredient19 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure19} of ${this.randomMeal.strIngredient19}`);
    }

    if (this.randomMeal.strIngredient20 !== '') {
      this.listIngredients.push(`${this.randomMeal.strMeasure20} of ${this.randomMeal.strIngredient20}`);
    }
  }

  onNavigate() {
    this.document.location.href = this.randomMeal.strYoutube;
  }
}
