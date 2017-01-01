import {CommentModel} from '.././comment/comment.model';

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
        public authorId: number, 
        public category: CategoriesEnum,
        public comments: CommentModel[])
  {  }
}