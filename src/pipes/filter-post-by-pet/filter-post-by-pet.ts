import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPostByPet',
})
export class FilterPostByPetPipe implements PipeTransform {
  /**
   * Takes a post and filter it by pet name.
   */
  transform(posts: any, name: string) {
    if (!name) return posts;

    return posts.filter(post => post.name.toLowerCase() === name.toLowerCase());
  }
}
