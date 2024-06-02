import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListCreateEditComponent } from './shopping-list/shopping-list-create-edit/shopping-list-create-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shared/services/shopping-list.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		RecipeComponent,
		RecipeDetailComponent,
		RecipeListComponent,
		RecipeItemComponent,
		ShoppingListComponent,
		ShoppingListCreateEditComponent,
		DropdownDirective
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [ShoppingListService],
	bootstrap: [AppComponent]
})
export class AppModule { }
