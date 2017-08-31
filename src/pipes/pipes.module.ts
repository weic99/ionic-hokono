import { NgModule } from '@angular/core';
import { FilterPetsBySpeciesPipe } from './filter-pets-by-species/filter-pets-by-species';
import { TimeToDatePipe } from './time-to-date/time-to-date';

@NgModule({
	declarations: [
		FilterPetsBySpeciesPipe,
    TimeToDatePipe
	],
	imports: [],
	exports: [
		FilterPetsBySpeciesPipe,
    TimeToDatePipe
	]
})
export class PipesModule {}
