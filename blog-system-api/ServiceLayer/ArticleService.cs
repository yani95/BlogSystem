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
    public class ArticleService : BaseService<ArticleEntity, ArticleModel>
    {
        public override BaseRepository<ArticleEntity> CreateRepository()
        {
            return new ArticleRepository();
        }

        protected override void PopulateItem(ArticleModel model, ref ArticleEntity item)
        {
            item.id = model.id;
            item.title = model.title;
            item.description = model.description;
            item.dateOfCreation = model.dateOfCreation;
            item.dateOfModification = model.dateOfModification;
            item.picture = model.picture;
            item.authorId = model.author.id;
            item.comments = model.comments;
            item.category = model.category;    
        }

        protected override void PopulateModel(ArticleModel model, ArticleEntity item)
        {
            model.id = item.id;
            model.title = item.title;
            model.description = item.description;
            model.dateOfCreation = item.dateOfCreation;
            model.dateOfModification = item.dateOfModification;
            model.picture = item.picture;
            model.comments = item.comments;
            model.category = item.category;
            model.author = item.author;
            //UserRepository userRepo = new UserRepository();
            //item.author = userRepo.GetById(item.authorId);
        }
    }
}
