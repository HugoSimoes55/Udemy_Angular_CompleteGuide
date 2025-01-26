import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EmptyRecipeComponent } from './recipe/empty-recipe/empty-recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeResolver } from './recipe/recipe.resolver';

const appRoutes: Routes = [
	{ path: "", redirectTo: "/recipes", pathMatch: "full" },
	{
		path: "recipes", component: RecipeComponent, children: [
			{ path: "", component: EmptyRecipeComponent },
			{ path: "new", component: RecipeEditComponent },
			{ path: ":id", component: RecipeDetailComponent, resolve: [RecipeResolver] },
			{ path: ":id/edit", component: RecipeEditComponent, resolve: [RecipeResolver] },
		]
	},
	{ path: "shopping-list", component: ShoppingListComponent },
];

@NgModule({
	declarations: [],
	imports: [CommonModule,
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
