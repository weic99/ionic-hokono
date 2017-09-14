import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPetsBySpecies',
})
export class FilterPetsBySpeciesPipe implements PipeTransform {

  transform(pets: any, query: string): any {
    if (!query) return pets;
    query = query.toLowerCase();
    // return pets.filter( (pet) => {
    //   return pet.types && pet.types.some( (t) => t.toLowerCase().includes(species));
    // });

    /** now filters by name and/or species/breed */
    return pets.filter(pet => {
      return JSON.stringify(pet).toLowerCase().match(query.toLowerCase());
    });
  }
}
