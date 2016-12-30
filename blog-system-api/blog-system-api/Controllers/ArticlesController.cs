using DataAccess.Entities;
using ServiceLayer;
using ServiceLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace blog_system_api.Controllers
{
    public class ArticlesController : BaseController<ArticleEntity, ArticleModel>
    {
        protected override BaseService<ArticleEntity, ArticleModel> GetService()
        {
            return new ArticleService();
        }
    }
}