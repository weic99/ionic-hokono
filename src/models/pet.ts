export interface Pet {
  name: string;
  age: {
    years: number,
    months: number
  };
  image: string;
  notes: string;
}
