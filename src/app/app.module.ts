import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppintEditComponent } from './shopping-list/shoppint-edit/shoppint-edit.component';


  @NgModule( {
    declarations: [
      AppComponent,
      HeaderComponent,
      RecipesComponent,
      RecipeListComponent,
      RecipeDetailsComponent,
      RecipeItemComponent,
      ShoppingListComponent,
      ShoppintEditComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
  } )
  export class AppModule { }
