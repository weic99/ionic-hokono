export class Pet {

  constructor(
    public id?: number,
    public name?: string,
    public age?: {
      years: number,
      months: number
    },
    public image?: string,
    public text?: string
  ) {  }

}
