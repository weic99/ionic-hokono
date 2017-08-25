import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPetsBySpecies',
})
export class FilterPetsBySpeciesPipe implements PipeTransform {

  transform(pets: any, species: string): any {
    if (!species) return pets;
    species = species.toLowerCase();
    return pets.filter( (pet) => {
      return pet.types && pet.types.some( (t) => t.toLowerCase() === species);
    });
  }
}
