export class CommentModel {
    constructor(
        public id: number,
        public text: string,
        public authorId: number, 
        public dateOfCreation: any, 
        public articleId: number
    ){  }
}