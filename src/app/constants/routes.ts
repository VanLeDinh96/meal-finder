import { Routes } from '@angular/router';
import { AllAreasComponent } from '../components/all-areas/all-areas.component';
import { AllCategoriesComponent } from '../components/all-categories/all-categories.component';
import { AllIngredientsComponent } from '../components/all-ingredients/all-ingredients.component';
import { AllMealCategoriesComponent } from '../components/all-meal-categories/all-meal-categories.component';
import { MealSearchingByFirstLetterComponent } from '../components/meal-searching-by-first-letter/meal-searching-by-first-letter.component';
import { MealSearchingByNameComponent } from '../components/meal-searching-by-name/meal-searching-by-name.component';
import { RandomMealComponent } from '../components/random-meal/random-meal.component';

export const routesConst: Routes = [
    { path: '', redirectTo: '/meal-searching-by-name', pathMatch: 'full' },
    { path: 'meal-searching-by-name', component: MealSearchingByNameComponent },
    { path: 'meal-searching-by-first-letter', component: MealSearchingByFirstLetterComponent },
    { path: 'random-meal', component: RandomMealComponent },
    { path: 'all-meal-categories', component: AllMealCategoriesComponent },
    { path: 'all-categories', component: AllCategoriesComponent },
    { path: 'all-areas', component: AllAreasComponent },
    { path: 'all-ingredients', component: AllIngredientsComponent }
];