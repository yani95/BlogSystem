import { UserModel } from '../user-details/user.model';

export class CommentModel {
    constructor(
        public id: number,
        public text: string,
        public UserEntity: UserModel, 
        public dateOfCreation: any, 
        public articleId: number
    ){  }
}