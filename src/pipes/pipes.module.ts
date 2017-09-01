import { NgModule } from '@angular/core';
import { FilterPetsBySpeciesPipe } from './filter-pets-by-species/filter-pets-by-species';
import { TimeToDatePipe } from './time-to-date/time-to-date';
import { FilterStringPipe } from './filter-string/filter-string';

@NgModule({
	declarations: [
		FilterPetsBySpeciesPipe,
    TimeToDatePipe,
    FilterStringPipe
	],
	imports: [],
	exports: [
		FilterPetsBySpeciesPipe,
    TimeToDatePipe,
    FilterStringPipe
	]
})
export class PipesModule {}
