using DataAccess;
using DataAccess.Entities;
using DataAccess.Repositories;
using ServiceLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer
{
    public class CommentService : BaseService<CommentEntity, CommentModel>
    {
        public override BaseRepository<CommentEntity> CreateRepository()
        {
            return new CommentRepository();
        }

        protected override void PopulateItem(CommentModel model, ref CommentEntity item)
        {
            item.id = model.id;
            item.text = model.text;
            item.UserEntityId = model.UserEntity.id;
            //item.author = model.author;
            item.articleId = model.articleId;
            // item.article = model.article;
            item.dateOfCreation = model.dateOfCreation;
        }

        protected override void PopulateModel(CommentModel model, CommentEntity item)
        {
            model.id = item.id;
            model.text = item.text;
            model.UserEntity = item.UserEntity;
            model.articleId = item.articleId;
            //model.article = item.article;
            model.dateOfCreation = item.dateOfCreation;
        }
    }
}
