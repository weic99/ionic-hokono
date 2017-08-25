import { NgModule } from '@angular/core';
import { FilterPetsBySpeciesPipe } from './filter-pets-by-species/filter-pets-by-species';

@NgModule({
	declarations: [
		FilterPetsBySpeciesPipe
	],
	imports: [],
	exports: [
		FilterPetsBySpeciesPipe
	]
})
export class PipesModule {}
