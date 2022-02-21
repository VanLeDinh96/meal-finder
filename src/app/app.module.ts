import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MealSearchingByNameComponent } from './components/meal-searching-by-name/meal-searching-by-name.component';
import { MealSearchingByFirstLetterComponent } from './components/meal-searching-by-first-letter/meal-searching-by-first-letter.component';
import { RandomMealComponent } from './components/random-meal/random-meal.component';
import { AllMealCategoriesComponent } from './components/all-meal-categories/all-meal-categories.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { AllAreasComponent } from './components/all-areas/all-areas.component';
import { AllIngredientsComponent } from './components/all-ingredients/all-ingredients.component';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'src/material.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MealSearchingByNameComponent,
    MealSearchingByFirstLetterComponent,
    RandomMealComponent,
    AllMealCategoriesComponent,
    AllCategoriesComponent,
    AllAreasComponent,
    AllIngredientsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
