export enum CategoriesEnum {
  music,
  travel,
  food,
  business,
  technology,
  design,
  science,
  education,
  photography,
  other
}

export class ArticleModel {
    constructor(
        public id: number,
        public title: string,
        public description: string, 
        public dateOfCreation: any, 
        public dateOfModification: any, 
        public picture: string, 
        public author: string, 
        public category: CategoriesEnum )
  {  }
}