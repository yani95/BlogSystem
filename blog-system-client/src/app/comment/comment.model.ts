export class CommentModel {
    constructor(
        public id: number,
        public text: string,
        public author: string, 
        public dateOfCreation: any, 
        public article: string, 
    ){  }
}