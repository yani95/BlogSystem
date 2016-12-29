export class CommentModel {
    constructor(
        public id: number,
        public text: string,
        public author: string, 
        public date: any, 
        public article: string, 
    ){  }
}