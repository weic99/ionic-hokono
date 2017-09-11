export interface Pet {
  name: string;
  age: {
    years: number,
    months: number
  };
  image: string;
  description: string;
  imageUrl: string;
  species: {
    breed: string;
  },
  ownerUid: string;
  filePath: string;
  adopt: boolean;
}
