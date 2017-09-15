import { NgModule } from '@angular/core';
import { FilterPetsBySpeciesPipe } from './filter-pets-by-species/filter-pets-by-species';
import { TimeToDatePipe } from './time-to-date/time-to-date';
import { FilterStringPipe } from './filter-string/filter-string';
import { FilterPostByPetPipe } from './filter-post-by-pet/filter-post-by-pet';

@NgModule({
	declarations: [
		FilterPetsBySpeciesPipe,
    TimeToDatePipe,
    FilterStringPipe,
    FilterPostByPetPipe
	],
	imports: [],
	exports: [
		FilterPetsBySpeciesPipe,
    TimeToDatePipe,
    FilterStringPipe,
    FilterPostByPetPipe
	]
})
export class PipesModule {}
